import AbstractRequest from "./AbstractRequest";
import Environment from "../Environment";
import Merchant from "../../Merchant";
import Sale from "../Sale";

export default class UpdateSaleRequest extends AbstractRequest {
    private environment : Environment;
    private type : String;
    private _serviceTaxAmount ?: Number;
    private _amount ?: Number;

    constructor(type: String, merchant: Merchant, env: Environment ) {
        super(merchant);
        this.environment = env;
        this.type = type;
    }
    async execute(paymentId: string) {
        const url = `${this.environment.getApiUrl()}1/sales/${paymentId}`;
        const saleQuery = await super.sendRequest(AbstractRequest.PUT, url);
        return await (new Sale(saleQuery.MerchantOrderId)).populate(saleQuery) ;
    }

    getServiceTaxAmount() : Number {
        return this._serviceTaxAmount;
    }

    setServiceTaxAmount(value: Number) {
        this._serviceTaxAmount = value;
    }

    getAmount(): Number {
        return this._amount;
    }

    setAmount(value: Number) {
        this._amount = value;
    }
}