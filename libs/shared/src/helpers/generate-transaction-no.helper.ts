import * as dayjs from 'dayjs';
export const generateTransactionNo = (): string => {
  return `${dayjs().format('YYMMd')}${dayjs().format('x')}`;
};
