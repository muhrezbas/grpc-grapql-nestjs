import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { PaymentType } from 'lib/shared/types';

registerEnumType(PaymentType, {
  name: 'PaymentType',
  description: 'this is PaymentType',
});
@InputType()
export class FilterListAvailablePaymentInput {
  @Field(() => PaymentType, { nullable: true })
  paymentType?: PaymentType;
}
