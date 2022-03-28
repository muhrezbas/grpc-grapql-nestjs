import { SprintAsiaVaIssuer } from 'lib/shared/types';
import { RpcException } from '@nestjs/microservices';

export const generateCustomerAccountVa = (
  vaIssuer: SprintAsiaVaIssuer,
  bin: string,
  phone: string,
): string => {
  let customerAccount = '';
  const minLength = 16;
  const totalLength = minLength - (bin.length + phone.length);
  let extraNumber = '';
  for (let i = 0; i < totalLength; i++) {
    extraNumber += '0';
  }
  switch (vaIssuer) {
    case SprintAsiaVaIssuer.BCA_VA:
      customerAccount = `${bin}${phone}`;
      break;
    case SprintAsiaVaIssuer.BNI_VA:
      customerAccount = `${bin}${extraNumber}${phone}`;
      break;
    case SprintAsiaVaIssuer.BRI_VA:
      customerAccount = `${bin}${phone}`;
      break;
    case SprintAsiaVaIssuer.MANDIRI_VA:
      customerAccount = `${bin}${phone.substring(1)}`;
      break;
    default:
      throw new RpcException('VA Channel not found.');
  }
  return customerAccount;
};
