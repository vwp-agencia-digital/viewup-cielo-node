interface Locale {
    errors: Array<CieloAPIFeedback>;
    updates: Array<SaleStatus>;

    init(): void;
}