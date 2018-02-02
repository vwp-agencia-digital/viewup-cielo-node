import SDKError from "./SDKError";

export interface MerchantInterface {
    getId(): string;

    getKey(): string;

}

export default class Merchant implements MerchantInterface {
    private readonly id: string = "";
    private readonly key: string = "";

    constructor(id: string, key: string) {
        if (!id || !key) {
            throw  new SDKError("Provide a valid ID or KEY", 100);
        }

        this.id = id;
        this.key = key;
    }


    /**
     * Gets the merchant identification number
     *
     * @return {String} the merchant identification number on Cielo
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Gets the merchant identification key
     *
     * @return {String} the merchant identification key on Cielo
     */
    public getKey(): string {
        return this.key;
    }

}