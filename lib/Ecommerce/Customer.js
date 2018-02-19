"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("./Address");
const Helper_1 = require("../Utility/Helper");
class Customer {
    constructor(name) {
        this._name = name;
        this._address = new Address_1.default();
        this._deliveryAddress = new Address_1.default();
    }
    address() {
        if (!this._address) {
            this.setAddress(new Address_1.default());
        }
        return this.getAddress();
    }
    deliveryAddress() {
        if (!this._deliveryAddress) {
            this.setDeliveryAddress(new Address_1.default());
        }
        return this.getDeliveryAddress();
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
        return this._name;
    }
    getEmail() {
        return this._email;
    }
    setEmail(email) {
        this._email = email;
        return this;
    }
    setBirthDate(date) {
        this._birthdate = date;
        return this;
    }
    getBirthDate() {
        return this._birthdate;
    }
    setIdentity(identity) {
        this._identity = identity;
        return this;
    }
    getIdentity() {
        return this._identity;
    }
    setIdentityType(identityType) {
        this._identityType = identityType;
        return this;
    }
    getIdentityType() {
        return this._identityType;
    }
    setAddress(address = new Address_1.default()) {
        this._address = address;
        return this._address;
    }
    getAddress() {
        return this._address;
    }
    setDeliveryAddress(address = new Address_1.default()) {
        this._deliveryAddress = address;
        return this._deliveryAddress;
    }
    getDeliveryAddress() {
        return this._deliveryAddress;
    }
    toJSON() {
        const planeObj = {
            Name: this.getName(),
            Email: this.getEmail(),
            Birthdate: this.getBirthDate(),
            Identity: this.getIdentity(),
            IdentityType: this.getIdentityType(),
            Address: this.getAddress().toJSON(),
            DeliveryAddress: this.getDeliveryAddress().toJSON(),
        };
        return Helper_1.default(planeObj);
    }
    populate(plainObject) {
        Object.keys(plainObject).map((key) => {
            const classKey = "_" + key.slice(0, 1).toLowerCase() + key.slice(1);
            if (key === "Address" || key === "DeliveryAddress") {
                this[classKey].populate({
                    Address: plainObject[key]
                });
            }
            else {
                this[classKey] = plainObject[key];
            }
        });
        return this;
    }
}
Customer.PERSON = "CPF";
exports.default = Customer;
