import { ICreateAccountUseCase } from '@caravan/accounts/domain/contracts/use-case/create-account.interface';
import { IListAllAccountsUseCase } from '@caravan/accounts/domain/contracts/use-case/list-all-accounts.interface';
import { CreateAccountInput } from '@caravan/infra/accounts/presentation/graphql/input/create-account.input';
import { AccountOutput } from '@caravan/infra/accounts/presentation/graphql/output/account.output';
import { PaginationArgs } from '@caravan/infra/shared/graphql/input/pagination-args.input';
import { Inject } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AccountResolver {
  constructor(
    @Inject('CreateAccountUseCase')
    private readonly createAccountUseCase: ICreateAccountUseCase,

    @Inject('ListAllAccountsUseCase')
    private readonly listAllAccountUseCase: IListAllAccountsUseCase,
  ) {}

  @Query(() => [AccountOutput], { name: 'accounts' })
  async listAll(@Args() pagination: PaginationArgs) {
    const { rows } = await this.listAllAccountUseCase.execute(pagination);
    return rows;
  }

  @Query(() => Int, { name: 'accountsCount' })
  async accountsCount() {
    const { count } = await this.listAllAccountUseCase.execute({});
    return count;
  }

  @Mutation(() => AccountOutput)
  async createAccount(@Args('input') input: CreateAccountInput) {
    return this.createAccountUseCase.execute(input);
  }
}
