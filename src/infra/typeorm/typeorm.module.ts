import { AccountMapping } from '@caravan/infra/typeorm/mapping/account.mapping';
import { typeOrmDatabaseConfig } from '@caravan/infra/typeorm/typeorm-database.config';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrmNestWrapperModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmNestWrapperModule.forRootAsync({
      useFactory: () => ({
        ...typeOrmDatabaseConfig(),
        entities: [AccountMapping],
      }),
    }),
  ],
})
export class TypeOrmModule {}
