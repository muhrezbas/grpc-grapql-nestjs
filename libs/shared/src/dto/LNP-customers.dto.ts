export interface LNPCustomersDto {
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  email?: string;
  birthDate?: string;
  contactNumber?: string;
  b2B?: boolean;
  callbackUrl?: string;
  loyaltyMerchantPartner?: LoyaltyMerchantPartner;
}

interface LoyaltyMerchantPartner {
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  active: boolean;
  expired: boolean;
  startDate: string;
  endDate: string;
  contactName?: string;
  contactNumber?: string;
  billingAddress: string;
  billingEmail: string;
  pointValue: number;
  loyaltyMerchantPartnerGroup: LoyaltyMerchantPartnerGroup;
}

interface LoyaltyMerchantPartnerGroup {
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  active: boolean;
  registerDate: string;
}
