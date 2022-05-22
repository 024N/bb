import { IEmail } from "../interfaces/IEmail";
export declare class EmailService implements IEmail {
    getUserEmail(name: string, surname: string, company: string): Promise<string>;
}
