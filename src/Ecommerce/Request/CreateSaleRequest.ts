import Sale from "../Sale";
import Merchant from "../Merchant";

import AbstractRequest from "./AbstractRequest";

export default class CreateSaleRequest extends AbstractRequest{

    private merchant: Merchant;

    constructor(merchant: Merchant){
        super(merchant);
    }

    execute(){

        return new Sale(this.merchant.id);
    }
}