import {emailParser} from '../utils/EmailParser';
import {IEmail} from '../interfaces/IEmail';
import {DomainValue} from '../utils/DomainType';
import {UndefinedCompany} from '../utils/CustomError';

export class EmailService implements IEmail {
  public async getUserEmail(
    name: string,
    surname: string,
    company: string
  ): Promise<string> {
    const domainInfo: DomainValue = await emailParser();
    for (const domain in domainInfo) {
      if (company === domain) {
        if (domainInfo[domain] === 0) {
          return name + surname + '@' + domain;
        } else {
          return name[0] + surname + '@' + domain;
        }
      }
    }
    throw new UndefinedCompany(
      'There is no the company in the list',
      'checkEmail'
    );
  }
}
