import { AccountsService } from '@caravan/accounts/data/services/accounts.service';
import { ICreateAccountService } from '@caravan/accounts/domain/contracts/services/create-account.interface';
import { IFindAccountService } from '@caravan/accounts/domain/contracts/services/find-account.interface';
import { IFindAllAccountService } from '@caravan/accounts/domain/contracts/services/find-all-accounts.interface';
import { CreateAccountUseCase } from '@caravan/accounts/domain/use-cases/create-account.use-case';
import { ListAllAccountsUseCase } from '@caravan/accounts/domain/use-cases/list-all-accounts.use-case';
import { AccountResolver } from '@caravan/infra/accounts/presentation/graphql/account.resolver';
import { AccountsRepository } from '@caravan/infra/accounts/repositories/accounts.repository';
import { EncrypterService } from '@caravan/infra/shared/services/encrypter.service';
import { UUIDService } from '@caravan/infra/shared/services/uuid.service';
import { IEncrypterService } from '@caravan/shared/infra/encrypter/encrypter.interface';
import { IUUIDService } from '@caravan/shared/infra/uuid/uuid.interface';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    AccountResolver,
    AccountsRepository,
    AccountsService,
    {
      provide: 'CreateAccountUseCase',
      useFactory: (
        accountsService: ICreateAccountService & IFindAccountService,
        uuidService: IUUIDService,
        encrypter: IEncrypterService,
      ) => new CreateAccountUseCase(accountsService, uuidService, encrypter),
      inject: [AccountsService, UUIDService, EncrypterService],
    },
    {
      provide: 'ListAllAccountsUseCase',
      useFactory: (accountsService: IFindAllAccountService) =>
        new ListAllAccountsUseCase(accountsService),
      inject: [AccountsService],
    },
  ],
})
export class AccountsModule {}
