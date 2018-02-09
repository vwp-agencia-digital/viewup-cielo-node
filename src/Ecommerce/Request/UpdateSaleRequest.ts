import AbstractRequest from "./AbstractRequest";
import Environment from "../Environment";
import Merchant from "../../Merchant";
import Sale from "../Sale";
import * as querystring from "querystring";

export default class UpdateSaleRequest extends AbstractRequest {
    private _environment : Environment;
    private _type : string;
    private _serviceTaxAmount: number;
    private _amount: number;

    constructor(type: string, merchant: Merchant, env: Environment ) {
        super(merchant);
        this._environment = env;
        this._type = type;
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
            var url = `${this._environment.getApiUrl()}1/sales/${paymentId}/${this.type}`;
            url += "?" + querystring.stringify(param);
            console.log(url);
            const saleQuery = await super.sendRequest(AbstractRequest.PUT, url);
            return await (new Sale(saleQuery.MerchantOrderId)).populate(saleQuery) ;

        }catch (e){

            throw e;
        }
    }

    getServiceTaxAmount() : number{
        return this._serviceTaxAmount;
    }

    setServiceTaxAmount(value: number) {
        this._serviceTaxAmount = value;
        return this;
    }

    getAmount(): number{
        return this._amount;
    }

    setAmount(value: number) {
        this._amount = value;
        return this;
    }
}