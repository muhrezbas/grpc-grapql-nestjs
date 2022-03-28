import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AvailablePaymentResponse {
  @Field(() => String)
  name: string;

  @Field(() => String)
  category: string;
}
