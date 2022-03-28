import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class LNPAssignRewardDto {
  @Type(() => String)
  code: string;

  @Type(() => String)
  assignedTo: string;

  @Type(() => String)
  status: string;

  @IsNumber()
  @Type(() => Number)
  merchantPartnerId: number;
}
