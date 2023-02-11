import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateAccountInput')
export class CreateAccountInput {
  @Field(() => String, {
    nullable: false,
    description:
      'The email will be used to identify and make login of the user',
    name: 'email',
  })
  email: string;

  @Field(() => String, {
    nullable: false,
    description: 'The password will be used in the login of the used',
    name: 'password',
  })
  password: string;
}
