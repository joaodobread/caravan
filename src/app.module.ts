import { typeOrmDatabaseConfig } from '@caravan/infra/typeorm/typeorm-database.config';
import { TypeOrmModule } from '@caravan/infra/typeorm/typeorm.module';
import { AccountsModule } from '@caravan/ioc/accounts/accounts.module';
import { SharedModule } from '@caravan/ioc/shared/shared.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [typeOrmDatabaseConfig],
    }),
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: true,
      path: 'graphql',
    }),
    SharedModule,
    TypeOrmModule,
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
