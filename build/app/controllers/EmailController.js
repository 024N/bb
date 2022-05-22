"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmailService_1 = require("../services/EmailService");
const Response_1 = require("../utils/Response");
const router = express_1.default.Router();
const emailService = new EmailService_1.EmailService();
router.get('/', async function (req, res, next) {
    const name = req.body.name;
    const surname = req.body.surname;
    const company = req.body.company;
    if (name && surname && company) {
        const email = await emailService.getUserEmail(name, surname, company).catch(next);
        if (email)
            (0, Response_1.sendSuccess)(res, { "Derived Email": email });
    }
    else {
        (0, Response_1.sendFailed)(res, "Missing Parameters").catch(next);
    }
});
exports.default = router;
//# sourceMappingURL=EmailController.js.map