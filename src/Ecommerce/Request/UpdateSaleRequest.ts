import AbstractRequest from "./AbstractRequest";
import Environment from "../Environment";
import Merchant from "../../Merchant";
import Sale from "../Sale";
import * as querystring from "querystring";

export default class UpdateSaleRequest extends AbstractRequest {


    private _environment: Environment;
    private _type: string = "";
    private _serviceTaxAmount: number = 0;
    private _amount: number = 0;


    constructor(type: string, merchant: Merchant, env: Environment) {
        super(merchant);
        this._environment = env;
        this.setType(type);
    }

    async execute(paymentId: string) {
        try {
            const param: any = {};
            if (this.getAmount()) {
                param.amount = this.getAmount();
            }
            if (this.getServiceTaxAmount()) {
                param.serviceTaxAmount = this.getServiceTaxAmount();
            }
            const url = `${this.getEnvironment().getApiUrl()}1/sales/${paymentId}/${this.getType()}?${querystring.stringify(param)}`;
            const saleQuery = await super.sendRequest(AbstractRequest.PUT, url);
            const self = saleQuery.Links.find((l: any) => l.Rel === "self");
            const sale = await super.sendRequest(AbstractRequest.GET, self.Href);
            return (new Sale(sale.MerchantOrderId)).populate(sale);

        } catch (e) {
            throw e;
        }
    }

    getServiceTaxAmount(): number {
        return this._serviceTaxAmount;
    }

    setServiceTaxAmount(value: number) {
        this._serviceTaxAmount = value;
        return this;
    }

    getAmount(): number {
        return this._amount;
    }

    setAmount(value: number) {
        this._amount = value;
        return this;
    }

    getType(): string {
        return this._type;
    }

    setType(value: string) {
        this._type = value;
    }

    getEnvironment(): Environment {
        return this._environment;
    }

    setEnvironment(value: Environment) {
        this._environment = value;
    }
}