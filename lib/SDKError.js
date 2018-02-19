"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SDKError extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
    toString() {
        return `${this.message}, Code: ${this.code ? this.code : '-'}`;
    }
}
exports.default = SDKError;
