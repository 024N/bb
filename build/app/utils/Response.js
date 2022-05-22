"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidUrlError = exports.sendError = exports.sendFailed = exports.sendSuccess = void 0;
const Constant_1 = require("./Constant");
const Logger_1 = require("./Logger");
async function sendSuccess(response, data) {
    response.status(Constant_1.Constant.STATUS_OK);
    response = setHeader(response);
    response.json(data);
    response.end();
}
exports.sendSuccess = sendSuccess;
async function sendFailed(response, message) {
    if (!response.headersSent) {
        Logger_1.log.warn(`Fail occurred In sendFailed # [ErrorName]: Fail # [ErrorMessage]: ${message}​​​​​​`);
        response.status(Constant_1.Constant.STATUS_INTERNAL_SERVER_ERROR);
        response = setHeader(response);
        response.json({ fail: message });
        response.end();
    }
}
exports.sendFailed = sendFailed;
async function sendError(response, responseMessage, statusCode) {
    response.status(statusCode);
    response = setHeader(response);
    response.json({ error: responseMessage });
    response.end();
}
exports.sendError = sendError;
async function invalidUrlError(response) {
    response.status(Constant_1.Constant.STATUS_NOT_FOUND);
    response = setHeader(response);
    response.json({ error: 'invalidUrlException' });
    response.end();
}
exports.invalidUrlError = invalidUrlError;
function setHeader(response) {
    response.setHeader('Content-Type', Constant_1.Constant.APPLICATION_JSON);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTION, GET, PUT, POST, DELETE');
    return response;
}
//# sourceMappingURL=Response.js.map