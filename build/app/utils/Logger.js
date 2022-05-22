"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.customLogFormat = void 0;
const winston_1 = __importDefault(require("winston"));
const { splat, combine, printf } = winston_1.default.format;
exports.customLogFormat = printf(({ level, message, meta }) => {
    const cleanMessage = message.replace(/\n/g, '');
    return `>>> BB --- ${level} --- ${cleanMessage}${meta ? '--- ' + JSON.stringify(meta) : ''} <<<`;
});
const consoleLog = new winston_1.default.transports.Console({
    format: combine(splat(), exports.customLogFormat),
    handleExceptions: true
});
const defaultLogOptions = {
    exitOnError: false,
    transports: [consoleLog] //, errorLogFile, allLogFile
};
winston_1.default.configure(defaultLogOptions);
exports.log = {
    debug: winston_1.default.debug,
    error: winston_1.default.error,
    info: winston_1.default.info,
    // setLoggerOptions,
    verbose: winston_1.default.verbose,
    warn: winston_1.default.warn
};
//# sourceMappingURL=Logger.js.map