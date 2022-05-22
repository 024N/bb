import {IEmail} from '../app/interfaces/IEmail';
import {EmailService} from '../app/services/EmailService';
import {UndefinedCompany} from '../app/utils/CustomError';

const emailService: IEmail = new EmailService();

describe('EmailService Test Suite', () => {
  beforeEach(() => {
    // jest.clearAllMocks();
    // jest.resetAllMocks();
    // jest.resetModules();
    // jest.restoreAllMocks();
  });

  //######## Test: getUserEmail( name: string, surname: string, company: string) ################
  test('Should return derived email(with fullname), if given domain is in the list', async () => {
    // GIVEN
    expect.assertions(1);
    // WHEN
    const response: any = await emailService.getUserEmail(
      'name',
      'surname',
      'google.com'
    );
    // THEN
    expect(response).toStrictEqual('namesurname@google.com');
  });

  test('Should return derived email(with short fullname), if given domain is in the list', async () => {
    // GIVEN
    expect.assertions(1);
    // WHEN
    const response: any = await emailService.getUserEmail(
      'name',
      'surname',
      'babbel.com'
    );
    // THEN
    expect(response).toStrictEqual('nsurname@babbel.com');
  });

  test('Should throw UndefinedCompany Exception if given domain is not in the list', async () => {
    // GIVEN
    expect.assertions(1);
    // WHEN
    const getUserEmail = async () => {
      await emailService.getUserEmail('name', 'surname', 'amazon.com');
    };
    // THEN
    expect(getUserEmail).rejects.toThrow(
      new UndefinedCompany('There is no the company in the list', 'checkEmail')
    );
  });
});
