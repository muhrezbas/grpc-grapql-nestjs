import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class LNPRegistrationDto {
  @Type(() => String)
  email: string;

  @Type(() => String)
  birthDate: string;

  @IsNumber()
  @Type(() => Number)
  identifierTypeId: number;

  @IsNumber()
  @Type(() => Number)
  pointTypeId: number;

  @Type(() => String)
  customerName: string;

  @Type(() => String)
  customerIdentifier: string;

  @Type(() => String)
  identifierTypeName: string;

  @Type(() => Number)
  membershipReferralCode?: number;

  @IsNumber()
  @Type(() => Number)
  programId: number;

  @IsNumber()
  @Type(() => Number)
  merchantPartnerId: number;
}
