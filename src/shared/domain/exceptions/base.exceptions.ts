import { HttpStatus } from '@caravan/shared/domain/types/http-status.type';

export abstract class BaseException extends Error {
  httpStatus: HttpStatus;
  reason: any;

  constructor(httpStatus: HttpStatus, reason: any) {
    super(reason);
    this.httpStatus = httpStatus;
    this.reason = reason;
  }
}
