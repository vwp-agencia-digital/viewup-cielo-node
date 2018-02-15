import Merchant from "../Merchant";

import Sale from "./Sale";
import Environment from "./Environment";
import CreateSaleRequest from "./Request/CreateSaleRequest";
import QuerySaleRequest from "./Request/QuerySaleRequest";
import UpdateSaleRequest from "./Request/UpdateSaleRequest";
// import TokenizeCardRequest from './Request/TokenizeCardRequest';

export default class CieloEcommerce {

    private readonly _merchant: Merchant;
    private readonly _environment: Environment;

    constructor(merchant: Merchant, env: Environment = Environment.production()) {

        this._merchant = merchant;
        this._environment = env;
    }

    prepare(sale: Sale) {
        return new CreateSaleRequest(this._merchant, this._environment);
    }

    async createSale(sale: Sale) {
        const createSaleRequest = new CreateSaleRequest(this._merchant, this._environment);
        return await createSaleRequest.execute(sale);
    }

    async getSale(paymentId: string) {
        const querySaleRequest = new QuerySaleRequest(this._merchant, this._environment);
        return await querySaleRequest.execute(paymentId);

    }

    async cancelSale(obj: { amount: number; paymentId: string; }) {
        const updateSaleRequest = new UpdateSaleRequest("void", this._merchant, this._environment);

        updateSaleRequest.setAmount(obj.amount);
        return await updateSaleRequest.execute(obj.paymentId);
    }

    //{paymentId: string, amount: number, serviceTaxAmount = null}
    async captureSale(obj: { amount: number; serviceTaxAmount: number; paymentId: string }) {

        const updateSaleRequest = new UpdateSaleRequest("capture", this._merchant, this._environment);

        updateSaleRequest.setAmount(obj.amount);
        updateSaleRequest.setServiceTaxAmount(obj.serviceTaxAmount);

        return await updateSaleRequest.execute(obj.paymentId);
    }

    // tokenizeCard(card: CreditCard){
    //     const tokenizeCardRequest = new TokenizeCardRequest(this._merchant. _this.environment);
    //     return await tokenizeCardRequest.execute(card);
    // }

}