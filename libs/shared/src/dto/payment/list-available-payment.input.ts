import { Field, InputType } from '@nestjs/graphql';
import { FilterListAvailablePaymentInput } from './filter-list-available-payment.input';

@InputType()
export class ListAvailablePaymentInput {
  @Field(() => FilterListAvailablePaymentInput, { nullable: true })
  filter?: FilterListAvailablePaymentInput;
}
