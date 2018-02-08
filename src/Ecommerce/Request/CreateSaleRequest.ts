import Merchant from "../../Merchant";

import Sale from "../Sale";
import Environment from "../Environment";

import AbstractRequest from "./AbstractRequest";

export default class CreateSaleRequest extends AbstractRequest{

    private _environment: Environment;

    constructor(merchant: Merchant, env: Environment){

        super(merchant);
        this._environment = env;
    }

    execute(){

        return new Sale();
    }
}