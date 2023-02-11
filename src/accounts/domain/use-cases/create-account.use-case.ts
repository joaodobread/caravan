import { ICreateAccountService } from '@caravan/accounts/domain/contracts/services/create-account.interface';
import { IFindAccountService } from '@caravan/accounts/domain/contracts/services/find-account.interface';
import { ICreateAccountUseCase } from '@caravan/accounts/domain/contracts/use-case/create-account.interface';
import { Account } from '@caravan/accounts/domain/entities/account';
import { AccountAlreadyExists } from '@caravan/accounts/domain/entities/exceptions/account-already-exists.exception';
import { IEncrypterService } from '@caravan/shared/infra/encrypter/encrypter.interface';
import { IUUIDService } from '@caravan/shared/infra/uuid/uuid.interface';

type IAccountService = ICreateAccountService & IFindAccountService;

export class CreateAccountUseCase implements ICreateAccountUseCase {
  constructor(
    private readonly accountsService: IAccountService,
    private readonly uuidService: IUUIDService,
    private readonly encrypter: IEncrypterService,
  ) {}

  async execute(
    input: ICreateAccountUseCase.Input,
  ): Promise<ICreateAccountUseCase.Output> {
    const issetAccount = await this.accountsService.findOne({
      email: input.email,
    });
    if (issetAccount) throw new AccountAlreadyExists();
    const account = new Account({
      email: input.email,
      password: await this.encrypter.hash({ plain: input.password }),
      id: this.uuidService.generate(),
    });
    await this.accountsService.create({ account });
    return {
      id: account.id,
      email: account.email,
      createdAt: account.createdAt,
    };
  }
}
