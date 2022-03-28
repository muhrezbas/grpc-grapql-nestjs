import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class LoyaltyMerchantPartner {
  @IsNumber()
  @Type(() => Number)
  id: number;
}

export class LNPCallbackRegistrationDto {
  @Type(() => String)
  id: string;

  @Type(() => String)
  email: string;

  @Type(() => String)
  birthDate: string;

  @Type(() => String)
  name: string;

  @Type(() => Boolean)
  b2B: boolean;

  @Type(() => String)
  callbackUrl: string;

  @Type(() => LoyaltyMerchantPartner)
  loyaltyMerchantPartner: LoyaltyMerchantPartner;
}
