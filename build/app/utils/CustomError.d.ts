export declare class CustomError extends Error {
    statusCode: number | undefined;
    responseMessage: string | undefined;
    methodName: string | undefined;
    constructor(message: string);
}
export declare class MissingParameterException extends CustomError {
    constructor(message: string, methodName: string);
}
export declare class UndefinedCompany extends CustomError {
    constructor(message: string, methodName: string);
}
export declare class HttpRequestException extends CustomError {
    constructor(error: any, methodName: string);
}
