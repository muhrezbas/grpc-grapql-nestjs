export const extractJWT = <T>(token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const buff = Buffer.from(base64, 'base64');
  const str = buff.toString('utf-8');
  return JSON.parse(str) as T;
};
