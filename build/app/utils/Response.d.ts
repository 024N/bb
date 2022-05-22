export declare function sendSuccess(response: any, data: any): Promise<void>;
export declare function sendFailed(response: any, message: any): Promise<void>;
export declare function sendError(response: any, responseMessage: any, statusCode: any): Promise<void>;
export declare function invalidUrlError(response: any): Promise<void>;
