"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const APIPrint_1 = require("./middleware/APIPrint");
const InvalidUrlHandler_1 = require("./middleware/InvalidUrlHandler");
const ErrorHandler_1 = require("./middleware/ErrorHandler");
const EmailController_1 = __importDefault(require("./controllers/EmailController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(APIPrint_1.apiPrint); // Print Which Api Path Called
app.use('/email', EmailController_1.default);
app.use('*', InvalidUrlHandler_1.invalidUrlHandler); // Catch Invalid Path and Send Exception
app.use(ErrorHandler_1.errorHandler); // Send Exception and Print Error Log
exports.default = app;
//# sourceMappingURL=app.js.map