"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SDKError_1 = require("./SDKError");
class Merchant {
    constructor(id, key) {
        this.id = "";
        this.key = "";
        if (!id || !key) {
            throw new SDKError_1.default("Provide a valid ID or KEY", 100);
        }
        this.id = id;
        this.key = key;
    }
    /**
     * Gets the merchant identification number
     *
     * @return {String} the merchant identification number on Cielo
     */
    getId() {
        return this.id;
    }
    /**
     * Gets the merchant identification key
     *
     * @return {String} the merchant identification key on Cielo
     */
    getKey() {
        return this.key;
    }
}
exports.default = Merchant;
