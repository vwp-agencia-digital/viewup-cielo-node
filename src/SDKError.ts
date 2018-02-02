export default class SDKError extends Error {

    message: string;
    code: number | undefined;

    constructor(message: string, code?: number) {
        super(message);
        this.message = message;
        this.code = code
    }

    toString() {
        return `${this.message}, Code: ${this.code ? this.code: '-'}`
    }
}