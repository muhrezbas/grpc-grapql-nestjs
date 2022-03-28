import { Field, ObjectType } from '@nestjs/graphql';
import { AvailablePaymentResponse } from 'lib/shared/dto/payment';

@ObjectType()
export class ListAvailablePaymentResponse {
  @Field(() => [AvailablePaymentResponse])
  AvailablePayments: AvailablePaymentResponse[];
}
