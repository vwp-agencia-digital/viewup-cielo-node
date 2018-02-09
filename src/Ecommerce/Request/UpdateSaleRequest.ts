import AbstractRequest from "./AbstractRequest";
import Environment from "../Environment";
import Merchant from "../../Merchant";
import Sale from "../Sale";
import querystring from 'querystring';

export default class UpdateSaleRequest extends AbstractRequest {
    private _environment : Environment;
    private _type : number;
    private _serviceTaxAmount : number;
    private _amount: number;

    constructor(type: string, merchant: Merchant, env: Environment ) {
        super(merchant);
        this._environment = env;
        this._type = type;
    }
    async execute(paymentId: string) {
        let url = `${this._environment.getApiUrl()}1/sales/${paymentId}/${this._type}`;
       
        let params = {};

        if(this._amount){
            params.amount = this._amount;
        }

        if(this.serviceTaxAmount){
            params.serviceTaxAmount = this._serviceTaxAmount;
        }


        var qstr = querystring.stringify(params);
      
        console.log({qstr});
        process.exit(1);  
        url += '&' + qstr; 
        console.log({url});
             

        const response = await super.sendRequest(AbstractRequest.PUT, url);
        return (new Sale(response.MerchantOrderId)).populate(response);
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