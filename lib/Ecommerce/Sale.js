"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
const Payment_1 = require("./Payment");
class Sale {
    constructor(merchantOrderId) {
        this._merchantOrderId = merchantOrderId;
    }
    populate(data) {
        this._merchantOrderId = data.MerchantOrderId;
        this._customer = (new Customer_1.default(data.Customer.name)).populate(data.Customer);
        this._payment = (new Payment_1.default).populate(data.Payment);
        return this;
    }
    toJSON() {
        return {
            "MerchantOrderId": this.getMerchantOrderId(),
            "Customer": this.getCustomer(),
            "Payment": this.getPayment(),
        };
    }
    customer(name) {
        if (!this._customer) {
            this.setCustomer(new Customer_1.default(name));
        }
        return this.getCustomer();
    }
    payment(amount, installments) {
        if (!this._payment) {
            this.setPayment(new Payment_1.default(amount, installments));
        }
        return this.getPayment();
    }
    getMerchantOrderId() {
        return this._merchantOrderId;
    }
    setMerchantOrderId(merchantOrderId) {
        this._merchantOrderId = merchantOrderId;
        return this;
    }
    getCustomer() {
        return this._customer;
    }
    setCustomer(data) {
        this._customer = data;
        return this;
    }
    getPayment() {
        return this._payment;
    }
    setPayment(payment) {
        this._payment = payment;
        return this;
    }
}
exports.default = Sale;
