"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreditCard_1 = require("./CreditCard");
class Payment {
    constructor(amount = 0, installments = 1) {
        this._softDescriptor = "";
        this._amount = amount;
        this._installments = installments;
        this._creditCard = new CreditCard_1.default;
    }
    toJSON() {
        const planeObj = {
            "Type": this.getType(),
            "Amount": this.getAmount(),
            "ServiceTaxAmount": this.getServiceTaxAmount(),
            "Installments": this.getInstallments(),
            "Interest": this.getInterest(),
            "Capture": this.getCapture(),
            "Authenticate": this.getAuthenticate(),
            "SoftDescriptor": this.getSoftDescriptor(),
            "CreditCard": this.getCreditCard(),
            "CapturedAmount": this.getCapturedAmount(),
            "ProofOfSale": this.getProofOfSale(),
            "Tid": this.getTid(),
            "AuthorizationCode": this.getAuthorizationCode(),
            "PaymentId": this.getPaymentId(),
            "Currency": this.getCurrency(),
            "Country": this.getCountry(),
            "ExtraDataCollection": this.getExtraDataCollection(),
            "Status": this.getStatus(),
            "ReturnCode": this.getReturnCode(),
            "ReturnMessage": this.getReturnMessage(),
            "Instructions": this.getInstructions(),
            "ExpirationDate": this.getExpirationDate(),
            "Url": this.getUrl(),
            "Number": this.getNumber(),
            "BarCodeNumber": this.getBarCodeNumber(),
            "DigitableLine": this.getDigitableLine(),
            "Assignor": this.getAssignor(),
            "Address": this.getAddress(),
            "Identification": this.getIdentification(),
            "Provider": this.getProvider(),
            "Links": this.getLinks(),
        };
        return planeObj;
    }
    populate(data) {
        this._serviceTaxAmount = data.ServiceTaxAmount;
        this._installments = data.Installments;
        this._interest = data.Interest;
        this._capture = data.Capture;
        this._authenticate = data.Authenticate;
        this._recurrent = data.Recurrent;
        this._recurrentPayment = data.RecurrentPayment;
        this._creditCard = (new CreditCard_1.default).populate(data.CreditCard);
        this._debitCard = data.DebitCard;
        this._authenticationUrl = data.AuthenticationUrl;
        this._tid = data.Tid;
        this._proofOfSale = data.ProofOfSale;
        this._authorizationCode = data.AuthorizationCode;
        this._softDescriptor = data.SoftDescriptor;
        this._returnUrl = data.ReturnUrl;
        this._provider = data.Provider;
        this._paymentId = data.PaymentId;
        this._type = data.Type;
        this._amount = data.Amount;
        this._receivedDate = data.ReceivedDate;
        this._capturedAmount = data.CapturedAmount;
        this._capturedDate = data.CapturedDate;
        this._voidedAmount = data.VoidedAmount;
        this._voidedDate = data.VoidedDate;
        this._currency = data.Currency;
        this._country = data.Country;
        this._returnCode = data.ReturnCode;
        this._returnMessage = data.ReturnMessage;
        this._status = data.Status;
        this._links = data.Links;
        this._extraDataCollection = data.ExtraDataCollection;
        this._expirationDate = data.ExpirationDate;
        this._url = data.Url;
        this._number = data.Number;
        this._boletoNumber = data.BoletoNumber;
        this._barCodeNumber = data.BarCodeNumber;
        this._digitableLine = data.DigitableLine;
        this._address = data.Address;
        this._assignor = data.Assignor;
        this._demonstrative = data.Demonstrative;
        this._identification = data.Identification;
        this._instructions = data.Instructions;
        return this;
    }
    creditCard() {
        return new CreditCard_1.default();
    }
    newCard() {
        return new CreditCard_1.default();
    }
    getServiceTaxAmount() {
        return this._serviceTaxAmount;
    }
    setServiceTaxAmount(value) {
        this._serviceTaxAmount = value;
        return this;
    }
    getInstallments() {
        return this._installments;
    }
    setInstallments(value) {
        this._installments = value;
        return this;
    }
    getInterest() {
        return this._interest;
    }
    setInterest(value) {
        this._interest = value;
        return this;
    }
    getCapture() {
        return this._capture;
    }
    setCapture(value) {
        this._capture = value;
        return this;
    }
    getAuthenticate() {
        return this._authenticate;
    }
    setAuthenticate(value) {
        this._authenticate = value;
        return this;
    }
    getRecurrent() {
        return this._recurrent;
    }
    setRecurrent(value) {
        this._recurrent = value;
        return this;
    }
    getRecurrentPayment() {
        return this._recurrentPayment;
    }
    setRecurrentPayment(value) {
        this._recurrentPayment = value;
        return this;
    }
    getCreditCard() {
        return this._creditCard;
    }
    setCreditCard(value) {
        this._creditCard = (new CreditCard_1.default).populate(value);
        return this;
    }
    getDebitCard() {
        return this._debitCard;
    }
    setDebitCard(value) {
        this._debitCard = value;
        return this;
    }
    getAuthenticationUrl() {
        return this._authenticationUrl;
    }
    setAuthenticationUrl(value) {
        this._authenticationUrl = value;
        return this;
    }
    getTid() {
        return this._tid;
    }
    setTid(value) {
        this._tid = value;
        return this;
    }
    getProofOfSale() {
        return this._proofOfSale;
    }
    setProofOfSale(value) {
        this._proofOfSale = value;
        return this;
    }
    getAuthorizationCode() {
        return this._authorizationCode;
    }
    setAuthorizationCode(value) {
        this._authorizationCode = value;
        return this;
    }
    getSoftDescriptor() {
        return this._softDescriptor;
    }
    setSoftDescriptor(value) {
        this._softDescriptor = value;
        return this;
    }
    getReturnUrl() {
        return this._returnUrl;
    }
    setReturnUrl(value) {
        this._returnUrl = value;
        return this;
    }
    getProvider() {
        return this._provider;
    }
    setProvider(value) {
        this._provider = value;
        return this;
    }
    getPaymentId() {
        return this._paymentId;
    }
    setPaymentId(value) {
        this._paymentId = value;
        return this;
    }
    getType() {
        return this._type;
    }
    setType(value) {
        this._type = value;
        return this;
    }
    getAmount() {
        return this._amount;
    }
    setAmount(value) {
        this._amount = value;
        return this;
    }
    getReceivedDate() {
        return this._receivedDate;
    }
    setReceivedDate(value) {
        this._receivedDate = value;
        return this;
    }
    getCapturedAmount() {
        return this._capturedAmount;
    }
    setCapturedAmount(value) {
        this._capturedAmount = value;
        return this;
    }
    getCapturedDate() {
        return this._capturedDate;
    }
    setCapturedDate(value) {
        this._capturedDate = value;
        return this;
    }
    getVoidedAmount() {
        return this._voidedAmount;
    }
    setVoidedAmount(value) {
        this._voidedAmount = value;
        return this;
    }
    getVoidedDate() {
        return this._voidedDate;
    }
    setVoidedDate(value) {
        this._voidedDate = value;
        return this;
    }
    getCurrency() {
        return this._currency;
    }
    setCurrency(value) {
        this._currency = value;
        return this;
    }
    getCountry() {
        return this._country;
    }
    setCountry(value) {
        this._country = value;
        return this;
    }
    getReturnCode() {
        return this._returnCode;
    }
    setReturnCode(value) {
        this._returnCode = value;
        return this;
    }
    getReturnMessage() {
        return this._returnMessage;
    }
    setReturnMessage(value) {
        this._returnMessage = value;
        return this;
    }
    getStatus() {
        return this._status;
    }
    setStatus(value) {
        this._status = value;
        return this;
    }
    getLinks() {
        return this._links;
    }
    setLinks(value) {
        this._links = value;
        return this;
    }
    getExtraDataCollection() {
        return this._extraDataCollection;
    }
    setExtraDataCollection(value) {
        this._extraDataCollection = value;
        return this;
    }
    getExpirationDate() {
        return this._expirationDate;
    }
    setExpirationDate(value) {
        this._expirationDate = value;
        return this;
    }
    getUrl() {
        return this._url;
    }
    setUrl(value) {
        this._url = value;
        return this;
    }
    getNumber() {
        return this._number;
    }
    setNumber(value) {
        this._number = value;
        return this;
    }
    getBoletoNumber() {
        return this._boletoNumber;
    }
    setBoletoNumber(value) {
        this._boletoNumber = value;
        return this;
    }
    getBarCodeNumber() {
        return this._barCodeNumber;
    }
    setBarCodeNumber(value) {
        this._barCodeNumber = value;
        return this;
    }
    getDigitableLine() {
        return this._digitableLine;
    }
    setDigitableLine(value) {
        this._digitableLine = value;
        return this;
    }
    getAddress() {
        return this._address;
    }
    setAddress(value) {
        this._address = value;
        return this;
    }
    getAssignor() {
        return this._assignor;
    }
    setAssignor(value) {
        this._assignor = value;
        return this;
    }
    getDemonstrative() {
        return this._demonstrative;
    }
    setDemonstrative(value) {
        this._demonstrative = value;
        return this;
    }
    getIdentification() {
        return this._identification;
    }
    setIdentification(value) {
        this._identification = value;
        return this;
    }
    getInstructions() {
        return this._instructions;
    }
    setInstructions(value) {
        this._instructions = value;
        return this;
    }
}
Payment.PAYMENTTYPE_CREDITCARD = "CreditCard";
Payment.PAYMENTTYPE_DEBITCARD = "DebitCard";
Payment.PAYMENTTYPE_ELECTRONIC_TRANSFER = "ElectronicTransfer";
Payment.PAYMENTTYPE_BOLETO = "Boleto";
Payment.PROVIDER_BRADESCO = "Bradesco";
Payment.PROVIDER_BANCO_DO_BRASIL = "BancoDoBrasil";
Payment.PROVIDER_SIMULADO = "Simulado";
exports.default = Payment;
