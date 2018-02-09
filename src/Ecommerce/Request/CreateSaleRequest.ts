import Sale from "../Sale";
import Merchant from "../../Merchant";
import AbstractRequest from "./AbstractRequest";
import Environment from "../Environment";

export default class CreateSaleRequest extends AbstractRequest {

    private environment: Environment;

    constructor(merchant: Merchant, environment: Environment) {
        super(merchant);
        this.environment = environment;
    }

    async execute(sale ?: Sale) {
        const url = `${this.environment.getApiUrl()}1/sales/`;
        return await super.sendRequest(AbstractRequest.POST, url, JSON.parse(JSON.stringify(sale)));
    }
}