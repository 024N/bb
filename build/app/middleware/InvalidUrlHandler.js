"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidUrlHandler = void 0;
const Logger_1 = require("../utils/Logger");
const Response_1 = require("../utils/Response");
// Error Handling Middleware
async function invalidUrlHandler(req, res, next) {
    Logger_1.log.error(`Invalid PATH or URL was entered`);
    (0, Response_1.invalidUrlError)(res);
}
exports.invalidUrlHandler = invalidUrlHandler;
//# sourceMappingURL=InvalidUrlHandler.js.map