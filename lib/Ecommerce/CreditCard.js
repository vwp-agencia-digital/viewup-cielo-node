"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCard {
    populate(data) {
        data = data || {};
        this.cardNumber = data.CardNumber;
        this.holder = data.Holder;
        this.expirationDate = data.ExpirationDate;
        this.securityCode = data.SecurityCode;
        this.saveCard = data.SaveCard;
        this.brand = data.Brand;
        return this;
    }
    toJSON() {
        return {
            "CardNumber": this.cardNumber,
            "Holder": this.holder,
            "ExpirationDate": this.expirationDate,
            "SecurityCode": this.securityCode,
            "SaveCard": this.saveCard,
            "Brand": this.brand
        };
    }
    getCardNumber() {
        return this.cardNumber;
    }
    setCardNumber(cardNumber) {
        this.cardNumber = cardNumber;
        return this;
    }
    getHolder() {
        return this.holder;
    }
    setHolder(holder) {
        this.holder = holder;
        return this;
    }
    getExpirationDate() {
        return this.expirationDate;
    }
    setExpirationDate(expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    getSecurityCode() {
        return this.securityCode;
    }
    setSecurityCode(securityCode) {
        this.securityCode = securityCode;
        return this;
    }
    getSaveCard() {
        return this.saveCard;
    }
    setSaveCard(saveCard) {
        this.saveCard = saveCard;
        return this;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
        return this;
    }
    getCardToken() {
        return this.cardToken;
    }
    setCardToken(cardToken) {
        this.cardToken = cardToken;
        return this;
    }
    getCustomerName() {
        return this.customerName;
    }
    setCustomerName(customerName) {
        this.customerName = customerName;
        return this;
    }
    getLinks() {
        return this.links;
    }
    setLinks(links) {
        this.links = links;
        return this;
    }
}
CreditCard.VISA = "Visa";
CreditCard.MASTERCARD = "Master";
CreditCard.AMEX = "Amex";
CreditCard.ELO = "Elo";
CreditCard.AURA = "Aura";
CreditCard.JCB = "JCB";
CreditCard.DINERS = "Diners";
CreditCard.DISCOVER = "Discover";
CreditCard.HIPERCARD = "Hipercard";
exports.default = CreditCard;
