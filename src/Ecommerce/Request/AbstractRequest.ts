import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import Merchant from "../../Merchant";
import Payment from "../Payment";
import SDKError from "../../SDKError";
import CieloRequestException from "./CieloRequestException";
import CieloError from "./CieloError";

const uniqid = require("uniqid");


class AbstractRequest {

    static GET = "get";
    static PUT = "put";
    static POST = "post";
    static DELETE = "delete";
    static Locale = null;
    private merchant: Merchant;


    constructor(merchant: Merchant) {
        this.merchant = merchant;
    }


    async sendRequest(method: string, url: string, content?: Payment | object | undefined) {
        try {
            const request: AxiosRequestConfig = {
                method,
                url,
                headers: {
                    ["Accept"]: "application/json",
                    ["Accept-Encoding"]: "gzip",
                    ["User-Agent"]: "CieloEcommerce/3.0 PHP SDK",
                    ["MerchantId"]: this.merchant.getId(),
                    ["MerchantKey"]: this.merchant.getKey(),
                    ["RequestId"]: uniqid()
                },
                data: content || {}
            };
            if (content && (method !== AbstractRequest.POST && method !== AbstractRequest.PUT)) {
                throw new SDKError("INVALID REQUEST METHOD", 101);
            }
            if (content) {
                request.headers["Content-Type"] = "application/json";
            } else {
                request.headers["Content-Length"] = "0";
            }
            const response = await  axios(request);
            return this.readResponse(response);
        } catch (e) {
            console.log(["error", e]);
            if (e.response) {
                return this.readResponse(e.response);
            }

            throw e;

        }
    }

    protected readResponse(response: AxiosResponse) {
        const status = response.status;
        switch (status) {
            case 200:
            case 201:
                return response.data;
            case 400:
                const exception = new CieloRequestException();
                for (let i = 0; i < response.data.length; ++i) {
                    const error = response.data[i];
                    const cieloError = new CieloError(error.Message, error.Code);
                    exception.setCieloError(cieloError);
                }


                throw exception;
            case 404:
                throw new CieloRequestException("Resource not found", 404);
            default:
                throw new CieloRequestException("Unknown status", response.status);
        }

    }


    static register(Locale: LangObject) {
        CieloError.register(Locale);
    }
}

export default AbstractRequest;