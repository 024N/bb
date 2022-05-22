"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestException = exports.UndefinedCompany = exports.MissingParameterException = exports.CustomError = void 0;
const Constant_1 = require("./Constant");
class CustomError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.CustomError = CustomError;
class MissingParameterException extends CustomError {
    constructor(message, methodName) {
        super(message);
        this.methodName = methodName;
        this.statusCode = Constant_1.Constant.STATUS_BAD_REQUEST;
        this.responseMessage = 'MissingParameterException';
    }
}
exports.MissingParameterException = MissingParameterException;
class UndefinedCompany extends CustomError {
    constructor(message, methodName) {
        super(message);
        this.methodName = methodName;
        this.statusCode = Constant_1.Constant.STATUS_NOT_FOUND;
        this.responseMessage = 'undefinedCompanyException';
    }
}
exports.UndefinedCompany = UndefinedCompany;
class HttpRequestException extends CustomError {
    constructor(error, methodName) {
        super(error.message);
        this.name = error.name;
        this.methodName = methodName;
        this.statusCode = Constant_1.Constant.STATUS_INTERNAL_SERVER_ERROR;
        this.responseMessage = 'httpRequestException';
    }
}
exports.HttpRequestException = HttpRequestException;
//# sourceMappingURL=CustomError.js.map