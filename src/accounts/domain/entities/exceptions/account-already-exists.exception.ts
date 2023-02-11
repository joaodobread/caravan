import { BaseException } from '@caravan/shared/domain/exceptions/base.exceptions';
import { HttpStatus } from '@caravan/shared/domain/types/http-status.type';

export class AccountAlreadyExists extends BaseException {
  constructor() {
    super(HttpStatus.CONFLICT, 'exception:ACCOUNT_ALREADY_EXISTS');
  }
}
