import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../utils/CustomError';
export declare function errorHandler(error: CustomError, req: Request, res: Response, next: NextFunction): Promise<void>;
