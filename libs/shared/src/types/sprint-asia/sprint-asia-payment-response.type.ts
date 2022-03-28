export interface SprintAsiaPaymentCreatedResponse {
  channelId: string;
  currency: string;
  insertStatus: string;
  insertMessage: string;
  insertId: string;
  additionalData: string;
  customerAccount?: string;
  transactionNo?: string;
}
