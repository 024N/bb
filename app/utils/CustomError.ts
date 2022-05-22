import {Constant} from './Constant';

export class CustomError extends Error {
  public statusCode: number | undefined;
  public responseMessage: string | undefined;
  public methodName: string | undefined;
  constructor(message: string) {
    super(message);
  }
}

export class MissingParameterException extends CustomError {
  constructor(message: string, methodName: string) {
    super(message);
    this.methodName = methodName;
    this.statusCode = Constant.STATUS_BAD_REQUEST;
    this.responseMessage = 'MissingParameterException';
  }
}

export class UndefinedCompany extends CustomError {
  constructor(message: string, methodName: string) {
    super(message);
    this.methodName = methodName;
    this.statusCode = Constant.STATUS_NOT_FOUND;
    this.responseMessage = 'undefinedCompanyException';
  }
}

export class HttpRequestException extends CustomError {
  constructor(error: any, methodName: string) {
    super(error.message);
    this.name = error.name;
    this.methodName = methodName;
    this.statusCode = Constant.STATUS_INTERNAL_SERVER_ERROR;
    this.responseMessage = 'httpRequestException';
  }
}
