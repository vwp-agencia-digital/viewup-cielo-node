"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const SDKError_1 = require("../../SDKError");
const CieloRequestException_1 = require("./CieloRequestException");
const CieloError_1 = require("./CieloError");
const uniqid = require("uniqid");
class AbstractRequest {
    constructor(merchant) {
        this.merchant = merchant;
    }
    sendRequest(method, url, content) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (method !== AbstractRequest.POST
                    && method !== AbstractRequest.GET
                    && method !== AbstractRequest.PUT
                    && method !== AbstractRequest.DELETE) {
                    throw new SDKError_1.default(`UNKNOW REQUEST METHOD. ${method} should be one of ${AbstractRequest.GET} ${AbstractRequest.POST} ${AbstractRequest.PUT} ${AbstractRequest.DELETE}`);
                }
                const request = {
                    method,
                    url,
                    headers: {
                        ["Content-Type"]: "application/json",
                        ["MerchantId"]: this.merchant.getId(),
                        ["MerchantKey"]: this.merchant.getKey(),
                        ["RequestId"]: uniqid()
                    },
                    data: content || {}
                };
                if (content && (method !== AbstractRequest.POST && method !== AbstractRequest.PUT)) {
                    throw new SDKError_1.default("INVALID REQUEST METHOD", 101);
                }
                if (content) {
                    request.headers["Content-Type"] = "application/json";
                }
                else {
                    request.headers["Content-Length"] = "0";
                }
                const response = yield axios_1.default(request);
                return this.readResponse(response);
            }
            catch (e) {
                if (e.response) {
                    return this.readResponse(e.response);
                }
                throw e;
            }
        });
    }
    readResponse(response) {
        const status = response.status;
        switch (status) {
            case 200:
            case 201:
                return response.data;
            case 400:
                const exception = new CieloRequestException_1.default();
                for (let i = 0; i < response.data.length; ++i) {
                    const error = response.data[i];
                    const cieloError = new CieloError_1.default(error.Message, error.Code);
                    exception.setCieloError(cieloError);
                }
                throw exception;
            case 404:
                throw new CieloRequestException_1.default("Resource not found", 404);
            default:
                throw new CieloRequestException_1.default("Unknown status", response.status);
        }
    }
    static register(Locale) {
        CieloError_1.default.register(Locale);
    }
}
AbstractRequest.GET = "get";
AbstractRequest.PUT = "put";
AbstractRequest.POST = "post";
AbstractRequest.DELETE = "delete";
AbstractRequest.Locale = null;
exports.default = AbstractRequest;
