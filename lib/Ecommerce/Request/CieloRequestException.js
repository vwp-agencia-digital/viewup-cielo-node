"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CieloRequestException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.errors = Array();
        this.message = "";
    }
    setCieloError(error) {
        this.errors.push(error);
        this.message = this.errors.map(e => `${e.getMessage()}`).join("\n");
    }
    getErrors() {
        return this.errors;
    }
}
exports.default = CieloRequestException;
