import CieloError from "./CieloError";

export default class CieloRequestException extends Error {
    private errors = Array<CieloError>();
    public message: string = "";

    constructor(message?: string, statusCode?: number) {
        super(message);
    }

    setCieloError(error: CieloError) {
        this.errors.push(error);
        this.message = this.errors.map(e => `${e.getMessage()}`).join("\n");
    }

    getErrors(): Array<CieloError> {
        return this.errors;
    }
}