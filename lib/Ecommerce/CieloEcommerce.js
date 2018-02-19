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
const Environment_1 = require("./Environment");
const CreateSaleRequest_1 = require("./Request/CreateSaleRequest");
const QuerySaleRequest_1 = require("./Request/QuerySaleRequest");
const UpdateSaleRequest_1 = require("./Request/UpdateSaleRequest");
// import TokenizeCardRequest from './Request/TokenizeCardRequest';
class CieloEcommerce {
    constructor(merchant, env = Environment_1.default.production()) {
        this._merchant = merchant;
        this._environment = env;
    }
    prepare(sale) {
        return new CreateSaleRequest_1.default(this._merchant, this._environment);
    }
    createSale(sale) {
        return __awaiter(this, void 0, void 0, function* () {
            const createSaleRequest = new CreateSaleRequest_1.default(this._merchant, this._environment);
            return yield createSaleRequest.execute(sale);
        });
    }
    getSale(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const querySaleRequest = new QuerySaleRequest_1.default(this._merchant, this._environment);
            return yield querySaleRequest.execute(paymentId);
        });
    }
    cancelSale(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateSaleRequest = new UpdateSaleRequest_1.default("void", this._merchant, this._environment);
            updateSaleRequest.setAmount(obj.amount);
            return yield updateSaleRequest.execute(obj.paymentId);
        });
    }
    //{paymentId: string, amount: number, serviceTaxAmount = null}
    captureSale(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateSaleRequest = new UpdateSaleRequest_1.default("capture", this._merchant, this._environment);
            updateSaleRequest.setAmount(obj.amount);
            updateSaleRequest.setServiceTaxAmount(obj.serviceTaxAmount);
            return yield updateSaleRequest.execute(obj.paymentId);
        });
    }
}
exports.default = CieloEcommerce;
