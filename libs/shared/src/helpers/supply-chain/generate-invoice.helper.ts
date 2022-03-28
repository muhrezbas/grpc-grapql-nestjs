import * as dayjs from 'dayjs';
import * as advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

import { randomChar } from 'lib/shared/helpers/supply-chain/random-char.helper';
export const generateInvoice = (): string => {
  return `${dayjs().format('YYYYMM')}${randomChar(3)}${dayjs().format('x')}`;
};
