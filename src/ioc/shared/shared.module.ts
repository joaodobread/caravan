import { EncrypterService } from '@caravan/infra/shared/services/encrypter.service';
import { UUIDService } from '@caravan/infra/shared/services/uuid.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [EncrypterService, UUIDService],
  exports: [EncrypterService, UUIDService],
})
export class SharedModule {}
