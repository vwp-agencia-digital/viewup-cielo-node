export default class CreditCard {
    static  readonly VISA = "Visa";
    static  readonly MASTERCARD = "Master";
    static  readonly AMEX = "Amex";
    static  readonly ELO = "Elo";
    static  readonly AURA = "Aura";
    static  readonly JCB = "JCB";
    static  readonly DINERS = "Diners";
    static  readonly DISCOVER = "Discover";
    static  readonly HIPERCARD = "Hipercard";

    private cardNumber ?: String;
    private holder ?: String;
    private expirationDate ?: String;
    private securityCode ?: String;
    private saveCard ?: String;
    private brand ?: String;
    private cardToken ?: String;
    private customerName ?: String;
    private links ?: String;
    populate(data ?: any) {
        data = data || {} ;
        this.cardNumber = data.CardNumber ;
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
    setCardNumber(cardNumber: string) {
        this.cardNumber = cardNumber;
        return this;
    }
    getHolder() {
        return this.holder;
    }
    setHolder(holder: string) {
        this.holder = holder;
        return this;
    }
    getExpirationDate() {
        return this.expirationDate;
    }
    setExpirationDate(expirationDate: string) {
        this.expirationDate = expirationDate;
        return this;
    }
    getSecurityCode() {
        return this.securityCode;
    }
    setSecurityCode(securityCode: string) {
        this.securityCode = securityCode;
        return this;
    }
    getSaveCard() {
        return this.saveCard;
    }
    setSaveCard(saveCard: string) {
        this.saveCard = saveCard;
        return this;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand: string) {
        this.brand = brand;
        return this;
    }
    getCardToken() {
        return this.cardToken;
    }
    setCardToken(cardToken: string) {
        this.cardToken = cardToken;
        return this;
    }
    getCustomerName() {
        return this.customerName;
    }
    setCustomerName(customerName: string) {
        this.customerName = customerName;
        return this;
    }
    getLinks() {
        return this.links;
    }
    setLinks(links: string) {
        this.links = links;
        return this;
    }
}