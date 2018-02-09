import AbstractRequest from "./AbstractRequest";
import Environment from "../Environment";
import Merchant from "../../Merchant";
import Sale from "../Sale";
import * as querystring from "querystring";

export default class UpdateSaleRequest extends AbstractRequest {
    private environment : Environment;
    private type : String;
    private _serviceTaxAmount ?: Number ;
    private _amount ?: Number;

    constructor(type: String, merchant: Merchant, env: Environment ) {
        super(merchant);
        this.environment = env;
        this.type = type;
    }
    async execute(paymentId: string) {
        try{
            var param : any = {};
            if (this._amount) {
                param.amount = this._amount;
            }
            if (this._serviceTaxAmount) {
                param.serviceTaxAmount = this._serviceTaxAmount;
            }
            var url = `${this.environment.getApiUrl()}1/sales/${paymentId}/${this.type}`;
            url += "?" + querystring.stringify(param);
            console.log(url);
            const saleQuery = await super.sendRequest(AbstractRequest.PUT, url);
            return await (new Sale(saleQuery.MerchantOrderId)).populate(saleQuery) ;

        }catch (e){

            throw e;
        }
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