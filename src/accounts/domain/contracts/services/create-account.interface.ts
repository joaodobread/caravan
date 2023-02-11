import { Account } from '@caravan/accounts/domain/entities/account';

export interface ICreateAccountService {
  create(
    input: ICreateAccountService.Input,
  ): Promise<ICreateAccountService.Output>;
}

export namespace ICreateAccountService {
  export type Input = { account: Account };

  export type Output = void;
}
