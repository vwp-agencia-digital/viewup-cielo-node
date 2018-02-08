import Customer from "./Customer";
import Payment from "./Payment";

export default class Sale implements CieloSerializable {
    private _merchantOrderId ?: String;
    private _customer ?: Customer;
    private _payment ?: Payment ;


    constructor(merchantOrderId: String ) {
        this._merchantOrderId = merchantOrderId;
    }

    populate(data ?: any ): any {
        this._merchantOrderId = data.MerchantOrderId;
        this._customer = (new Customer(data.Customer.name)).populate(data.Customer);
        this._payment = (new Payment).populate(data.Payment);
    }
    toJSON() {
        return {
            "MerchantOrderId": this.getMerchantOrderId(),
            "Customer": this.getCustomer(),
            "Payment": this.getPayment(),
        };
    }
    customer(name ?: any) {
        if (!this._customer) {
            this.setCustomer(new Customer(name));
        }
        return this.getCustomer();
    }
    payment(amount ?: number, installments ?: number ) {
        if (!this._payment) {
            this.setPayment(new Payment(amount, installments));
        }
        return this.getPayment();
    }
    getMerchantOrderId() {
        return this._merchantOrderId;
    }
    setMerchantOrderId(merchantOrderId ?: string): Sale {
        this._merchantOrderId = merchantOrderId;
        return this;
    }
    getCustomer() {
        return this._customer;
    }
    setCustomer(data ?: Customer): Sale {
        this._customer = data;
        return this;
    }
    getPayment() {
        return this._payment;
    }
    setPayment(payment ?: Payment): Sale {
        this._payment = payment;
        return this;
    }
}