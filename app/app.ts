import express from 'express';
import {apiPrint} from './middleware/APIPrint';
import {invalidUrlHandler} from './middleware/InvalidUrlHandler';
import {errorHandler} from './middleware/ErrorHandler';
import EmailController from './controllers/EmailController';

const app: express.Application = express();
app.use(express.json());
app.use(apiPrint); // Print Which Api Path Called

app.use('/email', EmailController);
app.use('*', invalidUrlHandler); // Catch Invalid Path and Send Exception

app.use(errorHandler); // Send Exception and Print Error Log

export default app;
