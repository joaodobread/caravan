import { Account } from '@caravan/accounts/domain/entities/account';

export interface IAccountsRepository {
  insert(input: { account: Account }): Promise<void>;
  findOne(input: { id?: string; email?: string }): Promise<Account | null>;
  findAll(input: { take: number; skip: number }): Promise<[Account[], number]>;
}
