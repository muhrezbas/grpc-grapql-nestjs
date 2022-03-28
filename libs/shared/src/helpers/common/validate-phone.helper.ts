import { PhoneNumberUtil } from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();

export function validatePhoneHelper(
  unverifiedPhone: string,
  regionId: string,
): { countryCode; phoneNumber } {
  const phoneObject = phoneUtil.parseAndKeepRawInput(unverifiedPhone, regionId);
  if (!phoneUtil.isValidNumber(phoneObject)) {
    throw new Error('Nomor Telepon tidak valid.');
  }
  const countryCode: string = phoneObject.getCountryCode().toString();
  const phoneNumber: string = phoneObject.getNationalNumber().toString();
  return {
    countryCode,
    phoneNumber,
  };
}
