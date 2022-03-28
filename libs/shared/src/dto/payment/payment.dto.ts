import {
  PaymentProviderType,
  PaymentStatusType,
  PaymentType,
} from 'lib/shared/types';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

registerEnumType(PaymentProviderType, {
  name: 'PaymentProviderType',
  description: 'Type of PaymentProviderType',
});

registerEnumType(PaymentStatusType, {
  name: 'PaymentStatusType',
  description: 'Type of PaymentStatusType',
});

registerEnumType(PaymentType, {
  name: 'PaymentType',
  description: 'Type of PaymentType',
});
@ObjectType()
export class Payment {
  @Field(() => String)
  id: string;

  @Field(() => String)
  paymentCode: string;

  @Field(() => String)
  transactionRefId: string;

  @Field(() => Number)
  transactionAmount: number;

  @Field(() => PaymentStatusType)
  paymentStatus: PaymentStatusType;

  @Field(() => String, { nullable: true })
  transactionDate: string;

  @Field(() => String, { nullable: true })
  expiredAt: string;

  @Field(() => Number)
  paymentFee: number;

  @Field(() => String, { nullable: true })
  currency: string;

  @Field(() => String, { nullable: true })
  issuerName: string;

  @Field(() => PaymentType, { nullable: true })
  paymentType: PaymentType;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;
}
