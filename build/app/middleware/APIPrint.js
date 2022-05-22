"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPrint = void 0;
const Logger_1 = require("../utils/Logger");
// Log Handling Middleware
async function apiPrint(req, res, next) {
    Logger_1.log.info(`###### CALLED API: ${req.method} ${req.path} ######`);
    next();
}
exports.apiPrint = apiPrint;
//# sourceMappingURL=APIPrint.js.map