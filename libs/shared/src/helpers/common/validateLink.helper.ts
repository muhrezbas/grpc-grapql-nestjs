import * as CryptoJS from 'crypto-js';
export const validateLinkHelper = async (link, secretKey: string) => {
  link = link
    .replace(/p1L2u3S/g, '+')
    .replace(/s1L2a3S4h/g, '/')
    .replace(/e1Q2u3A4l/g, '=');
  const decrypt = CryptoJS.AES.decrypt(link, secretKey);
  const payload = JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
  return { active: payload?.exp >= new Date(), payload };
};
