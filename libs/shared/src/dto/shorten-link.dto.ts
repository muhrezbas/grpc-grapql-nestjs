import { Type } from 'class-transformer';

export class ShortenLinkDto {
  @Type(() => String)
  url: string;
}
export class ShortenLinkResponseDto {
  @Type(() => Boolean)
  success: boolean;

  @Type(() => String)
  url: string;
}
