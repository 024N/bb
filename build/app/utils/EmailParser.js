"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailParser = void 0;
const userDB_1 = require("../db/userDB");
const users = userDB_1.userDB;
async function emailParser() {
    let domainList = {};
    for (let user in users) {
        let email = users[user];
        let fullName = email.split("@")[0];
        let domain = email.split("@")[1];
        let name = user.toLocaleLowerCase().split(" ")[0];
        if (fullName.includes(name)) {
            domainList[domain] = 0;
        }
        else {
            domainList[domain] = 1;
        }
    }
    return domainList;
}
exports.emailParser = emailParser;
//# sourceMappingURL=EmailParser.js.map