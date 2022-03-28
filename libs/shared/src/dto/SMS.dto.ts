export interface SMSConfig {
  userid: string;
  password: string;
  refno: string;
  masking: string;
  url?: string;
  msisdn?: string;
  message?: string;
}

export interface SendSMSDto {
  msisdn: string;
  message: string;
}
