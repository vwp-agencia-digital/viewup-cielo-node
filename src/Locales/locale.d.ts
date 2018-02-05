interface Locale {
    errors: Array<CieloAPIFeedback>;
    updates: Array<SaleStatus>;
    identityTypeCompany: "CNPJ",
    identityTypePerson: "CPF",

    init(): void;
}