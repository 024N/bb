import express, {Request, Response, NextFunction} from 'express';
import {EmailService} from '../services/EmailService';
import {sendFailed, sendSuccess} from '../utils/Response';

const router = express.Router();
const emailService = new EmailService();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const company = req.body.company;
  if (name && surname && company) {
    const email = await emailService
      .getUserEmail(name, surname, company)
      .catch(next);
    if (email) sendSuccess(res, {'Derived Email': email});
  } else {
    sendFailed(res, 'Missing Parameters').catch(next);
  }
});

export default router;
