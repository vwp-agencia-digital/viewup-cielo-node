import Merchant from "../../Merchant";

import Sale from "../Sale";
import Merchant from "../../Merchant";
import AbstractRequest from "./AbstractRequest";
import Environment from "../Environment";

export default class CreateSaleRequest extends AbstractRequest{

    private environment ?: Environment;

    constructor(merchant: Merchant, environment: Environment) {
        super(merchant);
        this.environment = environment;
    }

    execute(sale ?: Sale) {
        const url = `${this.environment.getApiUrl()}1/sales/`;
        return super.sendRequest("POST", url, sale);
    }
    protected toJSON(json ?: any ) {
        sale = (new Sale).populate(JSON.parse(json))
        return ;
    }
}