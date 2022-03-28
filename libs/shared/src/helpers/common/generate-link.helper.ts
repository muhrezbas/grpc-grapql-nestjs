import * as CryptoJS from 'crypto-js';

export const generateLink = async (
  id: string,
  secretKey: string,
): Promise<string> => {
  const now = new Date();
  const payload = JSON.stringify({
    id,
    exp: now.setMinutes(now.getMinutes() + 30),
  });

  return CryptoJS.AES.encrypt(payload, secretKey)
    .toString()
    .replace(/\+/g, 'p1L2u3S')
    .replace(/\//g, 's1L2a3S4h')
    .replace(/=/g, 'e1Q2u3A4l');
};
