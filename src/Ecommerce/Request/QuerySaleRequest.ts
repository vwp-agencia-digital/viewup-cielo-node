import Merchant from "../../Merchant";

import Environment from "../Environment";
import Sale from "../Sale";

import AbstractRequest from "./AbstractRequest";


export default class QuerySaleRequest extends AbstractRequest {

    private _environment: Environment;

    constructor(merchant: Merchant, env: Environment) {
        super(merchant);

        this._environment = env;
    }

    async execute(paymentId: string) {
        try {
            const url = `${this._environment.getApiQueryURL()}1/sales/${paymentId}`;
            const responseData = await (super.sendRequest(AbstractRequest.GET, url));
            return await (new Sale(responseData.MerchantOrderId)).populate(responseData);
        } catch (e) {
            throw e;
        }
    }

}