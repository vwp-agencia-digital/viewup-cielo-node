export default class CreditCard implements CieloSerializable {
    VISA ?: String;
    MASTERCARD ?: String;
    AMEX ?: String;
    ELO ?: String;
    AURA ?: String;
    JCB ?: String;
    DINERS ?: String;
    DISCOVER ?: String;
    HIPERCARD ?: String;
    private cardNumber ?: String;
    private holder ?: String;
    private expirationDate ?: String;
    private securityCode ?: String;
    private saveCard ?: String;
    private brand ?: String;
    private cardToken ?: String;
    private customerName ?: String;
    private links ?: String;

    public static sandbox() {
        /**
         * Bandeira Visa
         */
        const VISA = "Visa";
        /**
         * Bandeira Mastercard
         */
        const MASTERCARD = "Master";
        /**
         * Bandeira American Express
         */
        const AMEX = "Amex";
        /**
         * Bandeira ELO
         */
        const ELO = "Elo";
        /**
         * Bandeira Aura
         */
        const AURA = "Aura";
        /**
         * Bandeira JCB
         */
        const JCB = "JCB";
        /**
         * Bandeira Diners
         */
        const DINERS = "Diners";
        /**
         * Bandeira Discover
         */
        const DISCOVER = "Discover";
        /**
         * Bandeira Hipercard
         */
        const HIPERCARD = "Hipercard";
    }
    populate(data ?: any) {
        this.cardNumber = data.CreditCard.cardNumber;
        this.holder = data.CreditCard.holder;
        this.expirationDate = data.CreditCard.expirationDate;
        this.securityCode = data.CreditCard.securityCode;
        this.saveCard = data.CreditCard.saveCard;
        this.brand = data.CreditCard.brand;
        this.cardToken = data.CreditCard.cardToken;
        this.customerName = data.CreditCard.customerName;
        this.links = data.CreditCard.links;
    }
    toJSON() {
        return {};
    }

}