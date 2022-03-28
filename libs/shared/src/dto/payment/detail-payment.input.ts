import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DetailPaymentInput {
  @Field(() => String)
  transactionRefId: string;
}
