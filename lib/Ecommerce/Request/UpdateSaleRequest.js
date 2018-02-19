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
const AbstractRequest_1 = require("./AbstractRequest");
const Sale_1 = require("../Sale");
const querystring = require("querystring");
class UpdateSaleRequest extends AbstractRequest_1.default {
    constructor(type, merchant, env) {
        super(merchant);
        this._type = "";
        this._serviceTaxAmount = 0;
        this._amount = 0;
        this._environment = env;
        this.setType(type);
    }
    execute(paymentId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const param = {};
                if (this.getAmount()) {
                    param.amount = this.getAmount();
                }
                if (this.getServiceTaxAmount()) {
                    param.serviceTaxAmount = this.getServiceTaxAmount();
                }
                const url = `${this.getEnvironment().getApiUrl()}1/sales/${paymentId}/${this.getType()}?${querystring.stringify(param)}`;
                const saleQuery = yield _super("sendRequest").call(this, AbstractRequest_1.default.PUT, url);
                const self = saleQuery.Links.find((l) => l.Rel === "self");
                const sale = yield _super("sendRequest").call(this, AbstractRequest_1.default.GET, self.Href);
                return (new Sale_1.default(sale.MerchantOrderId)).populate(sale);
            }
            catch (e) {
                throw e;
            }
        });
    }
    getServiceTaxAmount() {
        return this._serviceTaxAmount;
    }
    setServiceTaxAmount(value) {
        this._serviceTaxAmount = value;
        return this;
    }
    getAmount() {
        return this._amount;
    }
    setAmount(value) {
        this._amount = value;
        return this;
    }
    getType() {
        return this._type;
    }
    setType(value) {
        this._type = value;
    }
    getEnvironment() {
        return this._environment;
    }
    setEnvironment(value) {
        this._environment = value;
    }
}
exports.default = UpdateSaleRequest;
