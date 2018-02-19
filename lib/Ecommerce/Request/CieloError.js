"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CieloError {
    /**
     * @memberOf {CieloAPIFeedback}
     * @param {string} message
     * @param {number} code
     */
    constructor(message, code) {
        this.code = code;
        this.message = message;
    }
    getMessage() {
        if (!CieloError.Locale) {
            return this.message;
        }
        const feedback = CieloError.Locale.errors.find(error => error.code === this.code) || { message: this.message };
        return feedback.message;
    }
    static register(Locale) {
        CieloError.Locale = Locale;
    }
}
exports.default = CieloError;
