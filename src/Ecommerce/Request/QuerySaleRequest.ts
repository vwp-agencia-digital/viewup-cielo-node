import Merchant from '../../Merchant';

import Environment from '../Environment';
import Sale from '../Sale';

import AbstractRequest from './AbstractRequest';


export default class QuerySaleRequest extends AbstractRequest{

    private _environment: Environment;

    constructor(merchant: Merchant, env: Environment){
        super(merchant);

        this._environment = env;
    }

    execute(paymentId: string){
        const url = `${this._environment.getApiUrl()}1/sales/${paymentId}`;
        return super.sendRequest('GET', url);
    }

}