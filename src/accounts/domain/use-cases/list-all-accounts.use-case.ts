import { IFindAllAccountService } from '@caravan/accounts/domain/contracts/services/find-all-accounts.interface';
import { IListAllAccountsUseCase } from '@caravan/accounts/domain/contracts/use-case/list-all-accounts.interface';

export class ListAllAccountsUseCase implements IListAllAccountsUseCase {
  constructor(private readonly accountsService: IFindAllAccountService) {}

  async execute(
    input: IListAllAccountsUseCase.Input,
  ): Promise<IListAllAccountsUseCase.Output> {
    const pagination = {
      skip: input.skip ?? 0,
      take: !input.take ? 10 : input.take > 250 ? 250 : input.take,
    };
    const { accounts, count } = await this.accountsService.findAll(pagination);
    return {
      count,
      rows: accounts.map((account) => ({
        id: account.id,
        email: account.email,
        createdAt: account.createdAt,
      })),
    };
  }
}
