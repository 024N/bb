"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const Logger_1 = require("../utils/Logger");
const Response_1 = require("../utils/Response");
// Error Handling Middleware
async function errorHandler(error, req, res, next) {
    Logger_1.log.error(`Error occurred In ${error.methodName} # [ErrorName]: ${error.name} # [ErrorMessage]: ${error.message}`);
    (0, Response_1.sendError)(res, error.responseMessage, error.statusCode);
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=ErrorHandler.js.map