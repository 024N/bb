"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const EmailParser_1 = require("../utils/EmailParser");
const CustomError_1 = require("../utils/CustomError");
class EmailService {
    async getUserEmail(name, surname, company) {
        let domainInfo = await (0, EmailParser_1.emailParser)();
        for (let domain in domainInfo) {
            if (company === domain) {
                if (domainInfo[domain] == 0) {
                    return name + surname + "@" + domain;
                }
                else {
                    return name[0] + surname + "@" + domain;
                }
            }
        }
        throw new CustomError_1.UndefinedCompany("There is no the company in the list", "checkEmail");
    }
}
exports.EmailService = EmailService;
//# sourceMappingURL=EmailService.js.map