interface FeedbackObject {
    code: string | number;
    message: string;
    originalMessage: string;

}

interface LangObject {
    errors: Array<FeedbackObject>;
    updates: Array<FeedbackObject>
}

interface CieloSerializable {
    populate(): any;
}

declare module "lang.json" {
    const value: LangObject;
    export default value;
}