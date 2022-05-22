export interface IEmail {
    getUserEmail(name: string, surname: string, company: string): Promise<string>;
}
