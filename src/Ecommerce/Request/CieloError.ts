export default class CieloError implements CieloAPIFeedback {
    // message?: string;
    code: number | string;
    message: string;
    static Locale: LangObject;

    /**
     * @memberOf {CieloAPIFeedback}
     * @param {string} message
     * @param {number} code
     */
    constructor(message: string, code: number | string) {
        this.code = code;
        this.message = this.getMessage();
    }

    getMessage(): string {
        if (!CieloError.Locale) {
            return this.message;
        }
        const finder = (error: any) => error.code === this.code;
        const feedback = CieloError.Locale.errors.find(finder) || CieloError.Locale.updates.find(finder) || {message: this.message};
        return feedback.message;
    }

    static register(Locale: LangObject): void {
        CieloError.Locale = Locale;
    }


}