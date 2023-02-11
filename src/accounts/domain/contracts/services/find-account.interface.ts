import { Account } from '@caravan/accounts/domain/entities/account';

export interface IFindAccountService {
  findOne(
    input: IFindAccountService.Input,
  ): Promise<IFindAccountService.Output>;
}

export namespace IFindAccountService {
  export type Input = {
    id?: string;
    email?: string;
  };

  export type Output = Account | null;
}
