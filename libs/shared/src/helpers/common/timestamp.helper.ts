import * as momentTz from 'moment-timezone';
import * as moment from 'moment';

export const getTimeStamp = () => {
  const now = momentTz();
  now.tz('Asia/Jakarta');
  return now.format('YYYY-MM-DD HH:mm.ssS');
};

export const getHour = () => {
  const now = momentTz();
  now.tz('Asia/Jakarta');
  return now.format('HH:mm');
};

export const timeJakarta = (time = moment()) => {
  return moment(time).tz('Asia/Jakarta');
};
