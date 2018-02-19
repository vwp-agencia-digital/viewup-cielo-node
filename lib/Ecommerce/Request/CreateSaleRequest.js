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
const Sale_1 = require("../Sale");
const AbstractRequest_1 = require("./AbstractRequest");
class CreateSaleRequest extends AbstractRequest_1.default {
    constructor(merchant, environment) {
        super(merchant);
        this.environment = environment;
    }
    execute(sale) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.environment.getApiUrl()}1/sales/`;
            const responseData = yield _super("sendRequest").call(this, AbstractRequest_1.default.POST, url, JSON.parse(JSON.stringify(sale)));
            return (new Sale_1.default(responseData.MerchantOrderId)).populate(responseData);
        });
    }
}
exports.default = CreateSaleRequest;
