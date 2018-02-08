export default class Environment {
    api: String;
    apiQuery: String;

    /**
     *
     * @param {String} api
     * @param {String} apiQuery
     */
    private constructor(api: String, apiQuery: String) {
        this.api = api;
        this.apiQuery = apiQuery;
    }

    /**
     * Get a environment settings to sandbox requests
     * @return {Environment}
     */
    public static sandbox(): Environment {
        const api = "https://apisandbox.cieloecommerce.cielo.com.br/";
        const apiQuery = "https://apiquerysandbox.cieloecommerce.cielo.com.br/";
        return new Environment(api, apiQuery);
    }

    /**
     * Get a environment settings to production requests
     * @return {Environment}
     */
    public static production(): Environment {
        const api = "https://api.cieloecommerce.cielo.com.br/";
        const apiQuery = "https://apiquery.cieloecommerce.cielo.com.br/";
        return new Environment(api, apiQuery);
    }

    /**
     *
     * @return {String}
     */
    public getApiUrl(): String {
        return this.api;
    }

    /**
     *
     * @return {String}
     */
    public getApiQueryURL(): String {
        return this.apiQuery;
    }
}