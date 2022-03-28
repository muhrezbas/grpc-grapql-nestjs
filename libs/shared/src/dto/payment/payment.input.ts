import {
  ApplicationType,
  PaymentProviderType,
  PaymentType,
  SprintAsiaVaIssuer,
} from 'lib/shared/types';
import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';

registerEnumType(SprintAsiaVaIssuer, {
  name: 'SprintAsiaVaIssuer',
  description: 'Type of SprintAsiaVaIssuer',
});

registerEnumType(PaymentProviderType, {
  name: 'PaymentProviderType',
  description: 'Type of PaymentProviderType',
});

registerEnumType(PaymentType, {
  name: 'PaymentType',
  description: 'Type of PaymentType',
});

registerEnumType(ApplicationType, {
  name: 'ApplicationType',
  description: 'Type of ApplicationType',
});
@InputType()
export class PaymentInput {
  @Field(() => PaymentProviderType)
  paymentProvider: PaymentProviderType;

  @Field(() => String)
  transactionRefId: string;

  @Field(() => Int)
  transactionAmount: number;

  @Field(() => Number)
  expiredInMinutes: number;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  customerName: string;

  @Field(() => PaymentType)
  paymentType?: PaymentType;

  @Field(() => SprintAsiaVaIssuer)
  vaChannel: SprintAsiaVaIssuer;

  @Field(() => String)
  description: string;

  @Field(() => Number)
  paymentFee: number;

  @Field(() => String)
  terminalId: string;

  @Field(() => ApplicationType)
  applicationType: ApplicationType;
}
