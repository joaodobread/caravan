import { IEncrypterService } from '@caravan/shared/infra/encrypter/encrypter.interface';
import { Injectable } from '@nestjs/common';
import * as Bcrypt from 'bcrypt';

@Injectable()
export class EncrypterService implements IEncrypterService {
  async hash(input: IEncrypterService.HashInput): Promise<string> {
    return Bcrypt.hash(input.plain, await Bcrypt.genSalt(12));
  }
}
