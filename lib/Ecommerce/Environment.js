"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Environment {
    /**
     *
     * @param {String} api
     * @param {String} apiQuery
     */
    constructor(api, apiQuery) {
        this.api = api;
        this.apiQuery = apiQuery;
    }
    /**
     * Get a environment settings to sandbox requests
     * @return {Environment}
     */
    static sandbox() {
        const api = "https://apisandbox.cieloecommerce.cielo.com.br/";
        const apiQuery = "https://apiquerysandbox.cieloecommerce.cielo.com.br/";
        return new Environment(api, apiQuery);
    }
    /**
     * Get a environment settings to production requests
     * @return {Environment}
     */
    static production() {
        const api = "https://api.cieloecommerce.cielo.com.br/";
        const apiQuery = "https://apiquery.cieloecommerce.cielo.com.br/";
        return new Environment(api, apiQuery);
    }
    /**
     *
     * @return {String}
     */
    getApiUrl() {
        return this.api;
    }
    /**
     *
     * @return {String}
     */
    getApiQueryURL() {
        return this.apiQuery;
    }
}
exports.default = Environment;
