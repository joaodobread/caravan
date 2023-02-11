import { ICreateAccountService } from '@caravan/accounts/domain/contracts/services/create-account.interface';
import { IFindAccountService } from '@caravan/accounts/domain/contracts/services/find-account.interface';
import { IFindAllAccountService } from '@caravan/accounts/domain/contracts/services/find-all-accounts.interface';
import { IAccountsRepository } from '@caravan/accounts/infra/repositories/account.interface';
import { AccountsRepository } from '@caravan/infra/accounts/repositories/accounts.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService
  implements ICreateAccountService, IFindAccountService, IFindAllAccountService
{
  constructor(
    @Inject(AccountsRepository)
    private readonly accountsRepository: IAccountsRepository,
  ) {}

  async create(input: ICreateAccountService.Input): Promise<void> {
    return this.accountsRepository.insert(input);
  }

  async findOne(
    input: IFindAccountService.Input,
  ): Promise<IFindAccountService.Output> {
    const account = await this.accountsRepository.findOne(input);
    return account;
  }

  async findAll(
    input: IFindAllAccountService.Input,
  ): Promise<IFindAllAccountService.Output> {
    const [accounts, count] = await this.accountsRepository.findAll(input);
    return {
      accounts,
      count,
    };
  }
}
