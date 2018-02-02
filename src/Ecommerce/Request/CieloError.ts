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
        this.message = message;
    }

    getMessage(): string {
        if (!CieloError.Locale) {
            return this.message;
        }
        const feedback = CieloError.Locale.errors.find(error => error.code === this.code) || {message: this.message};
        return feedback.message;
    }

    static register(Locale: LangObject): void {
        CieloError.Locale = Locale;
    }


}