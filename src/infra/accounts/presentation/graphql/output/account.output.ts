import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Account')
export class AccountOutput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => Date)
  createdAt: Date;
}
