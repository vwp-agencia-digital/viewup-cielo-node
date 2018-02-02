interface CieloAPIFeedback {
    code?: number | string;
    message?: string;

    getMessage(): string;
}