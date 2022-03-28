import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class WeekdaysEnabled {
  @Field() monday: boolean;
  @Field() tuesday: boolean;
  @Field() wednesday: boolean;
  @Field() thursday: boolean;
  @Field() friday: boolean;
  @Field() saturday: boolean;
  @Field() sunday: boolean;
}

@ObjectType()
class CouponMerchantGroup {
  @Field() id: number;
  @Field() name: string;
  @Field() externalId: string;
}

@ObjectType()
class LoyaltyMerchantPartner {
  @Field() id: number;
  @Field() name: string;
}

@ObjectType()
class LoyaltyMerchantPartnerGroup {
  @Field() id: number;
  @Field() name: string;
}

@ObjectType()
export class LNPRewardDto {
  @Field() createdBy: string;
  @Field() createdDate: string;
  @Field() lastModifiedBy: string;
  @Field() lastModifiedDate: string;
  @Field(() => Int) id: number;
  @Field() couponTypeCode: string;
  @Field() title: string;
  @Field() description: string;
  @Field() startDate: string;
  @Field() expiryDate?: string;
  @Field() offerType: string;
  @Field(() => Int) offerValue: number;
  @Field(() => Int) maxOfferValue?: number;
  @Field() fundingAccountId?: string;
  @Field(() => Int) minTransactionAmount?: number;
  @Field(() => Int) maxUsesPerUser?: number;
  @Field(() => Int) maxUsesPerUserPerDay?: number;
  @Field(() => Int) maxUsesPerUserPerWeek?: number;
  @Field() minPostedTxnPerUser: string;
  @Field(() => Int) maxRedemptionAmount: number;
  @Field(() => Int) maxPointsToAutoAssign: number;
  @Field() active: boolean;
  @Field() cashback: boolean;
  @Field() expired: boolean;
  @Field() consumerUse: boolean;
  @Field() loyaltyActivityTypeCode: string;
  @Field() customOne: string;
  @Field(() => WeekdaysEnabled)
  weekdaysEnabled: WeekdaysEnabled;
  @Field() startTime?: string;
  @Field() endTime?: string;
  @Field() imageFilename?: string;
  @Field() image?: string;
  @Field(() => CouponMerchantGroup)
  couponMerchantGroup: CouponMerchantGroup;
  @Field(() => LoyaltyMerchantPartner)
  loyaltyMerchantPartner: LoyaltyMerchantPartner;
  @Field(() => LoyaltyMerchantPartnerGroup)
  loyaltyMerchantPartnerGroup: LoyaltyMerchantPartnerGroup;
}
