import CreditCard from "./CreditCard";

export default class Payment implements CieloSerializable {

    static readonly PAYMENTTYPE_CREDITCARD = "CreditCard";
    static readonly PAYMENTTYPE_DEBITCARD = "DebitCard";
    static readonly PAYMENTTYPE_ELECTRONIC_TRANSFER = "ElectronicTransfer";
    static readonly PAYMENTTYPE_BOLETO = "Boleto";
    static readonly PROVIDER_BRADESCO = "Bradesco";
    static readonly PROVIDER_BANCO_DO_BRASIL = "BancoDoBrasil";
    static readonly PROVIDER_SIMULADO = "Simulado";


    private _serviceTaxAmount ?: number;
    private _installments ?: number;
    private _interest ?: string;
    private _capture  ?: boolean ;
    private _authenticate ?: boolean;
    private _recurrent ?: string;
    private _recurrentPayment ?: string;
    private _creditCard ?: CreditCard;
    private _debitCard ?: string;
    private _authenticationUrl ?: string;
    private _tid ?: string;
    private _proofOfSale ?: string;
    private _authorizationCode ?: string;
    private _softDescriptor  ?: string = "";
    private _returnUrl ?: string;
    private _provider ?: string;
    private _paymentId ?: string;
    private _type ?: string;
    private _amount ?: number;
    private _receivedDate ?: string;
    private _capturedAmount ?: number;
    private _capturedDate ?: string;
    private _voidedAmount ?: string;
    private _voidedDate ?: string;
    private _currency ?: string;
    private _country ?: string;
    private _returnCode ?: string;
    private _returnMessage ?: string;
    private _status ?: number;
    private _links ?: object;
    private _extraDataCollection ?: object;
    private _expirationDate ?: string;
    private _url ?: string;
    private _number ?: string;
    private _boletoNumber ?: string;
    private _barCodeNumber ?: string;
    private _digitableLine ?: string;
    private _address ?: string;
    private _assignor ?: string;
    private _demonstrative ?: string;
    private _identification ?: string;
    private _instructions ?: string;

    constructor(amount = 0 , installments = 1) {
        this._amount = amount;
        this._installments = installments;
        this._creditCard = new CreditCard;
    }
    toJSON() {
        return {
            "Payment": {
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
            }
        };
    }


    populate(data ?: any) {
        data.Payment = data.Payment || {};
        this._serviceTaxAmount = data.ServiceTaxAmount;
        this._installments = data.Installments;
        this._interest = data.Interest;
        this._capture = data.Capture;
        this._authenticate = data.Authenticate;
        this._recurrent = data.Recurrent;
        this._recurrentPayment = data.RecurrentPayment;
        this._creditCard = (new CreditCard).populate(data.CreditCard) ;
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
        return new CreditCard();
    }
    newCard() {
        return new CreditCard();
    }

    getServiceTaxAmount() {
        return this._serviceTaxAmount;
    }

    setServiceTaxAmount(value: number) {
        this._serviceTaxAmount = value;
        return this;
    }

    getInstallments() {
        return this._installments;
    }

    setInstallments(value: number) {
        this._installments = value;
        return this;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(value: string) {
        this._interest = value;
        return this;
    }

    getCapture() {
        return this._capture;
    }

    setCapture(value: boolean) {
        this._capture = value;
        return this;
    }

    getAuthenticate() {
        return this._authenticate;
    }

    setAuthenticate(value: boolean) {
        this._authenticate = value;
        return this;
    }

    getRecurrent() {
        return this._recurrent;
    }

    setRecurrent(value: string) {
        this._recurrent = value;
        return this;
    }

    getRecurrentPayment() {
        return this._recurrentPayment;
    }

    setRecurrentPayment(value: string) {
        this._recurrentPayment = value;
        return this;
    }

    getCreditCard() {
        return this._creditCard;
    }

    setCreditCard(value: CreditCard) {
        this._creditCard = (new CreditCard).populate(value);
        return this;
    }

    getDebitCard() {
        return this._debitCard;
    }

    setDebitCard(value: string) {
        this._debitCard = value;
        return this;
    }

    getAuthenticationUrl() {
        return this._authenticationUrl;
    }

    setAuthenticationUrl(value: string) {
        this._authenticationUrl = value;
        return this;
    }

    getTid() {
        return this._tid;
    }

    setTid(value: string) {
        this._tid = value;
        return this;
    }

    getProofOfSale() {
        return this._proofOfSale;
    }

    setProofOfSale(value: string) {
        this._proofOfSale = value;
        return this;
    }

    getAuthorizationCode() {
        return this._authorizationCode;
    }

    setAuthorizationCode(value: string) {
        this._authorizationCode = value;
        return this;
    }

    getSoftDescriptor() {
        return this._softDescriptor;
    }

    setSoftDescriptor(value: string) {
        this._softDescriptor = value;
        return this;
    }

    getReturnUrl() {
        return this._returnUrl;
    }

    setReturnUrl(value: string) {
        this._returnUrl = value;
        return this;
    }

    getProvider() {
        return this._provider;
    }

    setProvider(value: string) {
        this._provider = value;
        return this;
    }

    getPaymentId() {
        return this._paymentId;
    }

    setPaymentId(value: string) {
        this._paymentId = value;
        return this;
    }

    getType() {
        return this._type;
    }

    setType(value: string) {
        this._type = value;
        return this;
    }

    getAmount() {
        return this._amount;
    }

    setAmount(value: number) {
        this._amount = value;
        return this;
    }

    getReceivedDate() {
        return this._receivedDate;
    }

    setReceivedDate(value: string) {
        this._receivedDate = value;
        return this;
    }

    getCapturedAmount() {
        return this._capturedAmount;
    }

    setCapturedAmount(value: number) {
        this._capturedAmount = value;
        return this;
    }

    getCapturedDate() {
        return this._capturedDate;
    }

    setCapturedDate(value: string) {
        this._capturedDate = value;
        return this;
    }

    getVoidedAmount() {
        return this._voidedAmount;
    }

    setVoidedAmount(value: string) {
        this._voidedAmount = value;
        return this;
    }

    getVoidedDate() {
        return this._voidedDate;
    }

    setVoidedDate(value: string) {
        this._voidedDate = value;
        return this;
    }

    getCurrency() {
        return this._currency;
    }

    setCurrency(value: string) {
        this._currency = value;
        return this;
    }

    getCountry() {
        return this._country;
    }

    setCountry(value: string) {
        this._country = value;
        return this;
    }

    getReturnCode() {
        return this._returnCode;
    }

    setReturnCode(value: string) {
        this._returnCode = value;
        return this;
    }

    getReturnMessage() {
        return this._returnMessage;
    }

    setReturnMessage(value: string) {
        this._returnMessage = value;
        return this;
    }

    getStatus() {
        return this._status;
    }

    setStatus(value: number) {
        this._status = value;
        return this;
    }

    getLinks() {
        return this._links;
    }

    setLinks(value: object) {
        this._links = value;
        return this;
    }

    getExtraDataCollection() {
        return this._extraDataCollection;
    }

    setExtraDataCollection(value: object) {
        this._extraDataCollection = value;
        return this;
    }

    getExpirationDate() {
        return this._expirationDate;
    }

    setExpirationDate(value: string) {
        this._expirationDate = value;
        return this;
    }

    getUrl() {
        return this._url;
    }

    setUrl(value: string) {
        this._url = value;
        return this;
    }

    getNumber() {
        return this._number;
    }

    setNumber(value: string) {
        this._number = value;
        return this;
    }

    getBoletoNumber() {
        return this._boletoNumber;
    }

    setBoletoNumber(value: string) {
        this._boletoNumber = value;
        return this;
    }

    getBarCodeNumber() {
        return this._barCodeNumber;
    }

    setBarCodeNumber(value: string) {
        this._barCodeNumber = value;
        return this;
    }

    getDigitableLine() {
        return this._digitableLine;
    }

    setDigitableLine(value: string) {
        this._digitableLine = value;
        return this;
    }

    getAddress() {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
        return this;
    }

    getAssignor() {
        return this._assignor;
    }

    setAssignor(value: string) {
        this._assignor = value;
        return this;
    }

    getDemonstrative() {
        return this._demonstrative;
    }

    setDemonstrative(value: string) {
        this._demonstrative = value;
        return this;
    }

    getIdentification() {
        return this._identification;
    }

    setIdentification(value: string) {
        this._identification = value;
        return this;
    }

    getInstructions() {
        return this._instructions;
    }

    setInstructions(value: string) {
        this._instructions = value;
        return this;
    }
}