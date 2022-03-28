import { PaymentType, SprintAsiaVaIssuer } from 'lib/shared/types';

export class CreatePaymentInput {
  paymentType: PaymentType;
  vaChannel?: SprintAsiaVaIssuer;
  transactionRefId: string;
  transactionAmount: number;
}
