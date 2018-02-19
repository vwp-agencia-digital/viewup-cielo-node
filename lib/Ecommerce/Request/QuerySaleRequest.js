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
class QuerySaleRequest extends AbstractRequest_1.default {
    constructor(merchant, env) {
        super(merchant);
        this._environment = env;
    }
    execute(paymentId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${this._environment.getApiQueryURL()}1/sales/${paymentId}`;
                const responseData = yield (_super("sendRequest").call(this, AbstractRequest_1.default.GET, url));
                return yield (new Sale_1.default(responseData.MerchantOrderId)).populate(responseData);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = QuerySaleRequest;
