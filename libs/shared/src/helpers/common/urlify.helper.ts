export function UrlIfy(text: string): string {
  const matches = text.match(/\bhttps?:\/\/\S+/gi);
  if (matches?.length > 0) {
    return matches[0];
  } else {
    return '';
  }
}
