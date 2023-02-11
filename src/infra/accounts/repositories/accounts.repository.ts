import { Account } from '@caravan/accounts/domain/entities/account';
import { AccountMapping } from '@caravan/infra/typeorm/mapping/account.mapping';
import { IAccountsRepository } from '@caravan/accounts/infra/repositories/account.interface';
import { Injectable } from '@nestjs/common';

import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AccountsRepository implements IAccountsRepository {
  private repository: Repository<AccountMapping>;

  constructor(connection: DataSource) {
    this.repository = connection.getRepository<AccountMapping>(AccountMapping);
  }

  async insert(input: { account: Account }): Promise<void> {
    const account = this.repository.create({
      id: input.account.id,
      email: input.account.email,
      password: input.account.password,
    });
    await this.repository.save(account);
  }

  async findOne(input: {
    id?: string | undefined;
    email?: string | undefined;
  }): Promise<Account | null> {
    const account = await this.repository.findOne({ where: input });
    return account
      ? new Account({
          id: account.id,
          email: account.email,
          password: account.password,
          createdAt: new Date(account.createdAt),
        })
      : null;
  }

  async findAll(input: {
    take: number;
    skip: number;
  }): Promise<[Account[], number]> {
    const [accounts, count] = await this.repository.findAndCount({
      take: input.take,
      skip: input.skip,
    });
    return [
      accounts.map(
        (account) =>
          new Account({ ...account, createdAt: new Date(account.createdAt) }),
      ),
      count,
    ];
  }
}
