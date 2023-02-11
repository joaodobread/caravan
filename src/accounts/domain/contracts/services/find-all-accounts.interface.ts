import { Account } from '@caravan/accounts/domain/entities/account';

export interface IFindAllAccountService {
  findAll(
    input: IFindAllAccountService.Input,
  ): Promise<IFindAllAccountService.Output>;
}

export namespace IFindAllAccountService {
  export type Input = {
    take: number;
    skip: number;
  };

  export type Output = {
    accounts: Account[];
    count: number;
  };
}
