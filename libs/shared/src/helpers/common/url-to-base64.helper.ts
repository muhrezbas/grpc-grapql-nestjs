import axios, { AxiosRequestConfig } from 'axios';

export async function urlToBase64(url: string): Promise<string> {
  const config: AxiosRequestConfig = { responseType: 'arraybuffer' };
  const response = await axios.get(url, config);
  const blob = await response.data;
  return Buffer.from(blob, 'binary').toString('base64');
}
