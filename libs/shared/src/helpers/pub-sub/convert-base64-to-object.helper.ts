export const convertBase64ToObject = (data: Uint8Array | string): string =>
  Buffer.from(data as string, 'base64').toString('utf-8');
