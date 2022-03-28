import { ApolloError } from 'apollo-server-express';
import * as crypto from 'crypto';

export const ValidatePasswordHelper = (
  password: string,
  confirmPassword: string,
): void => {
  const regex =
    /^(?=.*[0-9])(?=.*[?\-\;\]\:!@#$%^&*[(+|{}=_'<>.,")/])[a-zA-Z0-9?\-\;\]\:!@#$%^&*[(+|{}=_'<>.,/")]{7,128}$/;
  const isValid = crypto.timingSafeEqual(
    Buffer.from(password),
    Buffer.from(confirmPassword),
  );
  if (!isValid) {
    throw new ApolloError('Kata sandi yang anda masukkan tidak sesuai');
  } else if (!regex.test(password)) {
    throw new ApolloError(
      'Kata sandi harus mengandung angka, huruf, dan spesial karakter',
    );
  }
};
