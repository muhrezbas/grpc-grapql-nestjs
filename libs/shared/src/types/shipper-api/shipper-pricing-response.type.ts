export interface ShipperPricingResponse {
  metadata: {
    path: string;
    http_status_code: number;
    http_status: string;
    timestamp: number;
  };
  data: {
    origin: {
      area_id: number;
      area_name: string;
      suburb_id: number;
      suburb_name: string;
      city_id: number;
      city_name: string;
      province_id: number;
      province_name: string;
      country_id: number;
      country_name: string;
      lat: number;
      lng: number;
    };
    destination: {
      area_id: number;
      area_name: string;
      suburb_id: number;
      suburb_name: string;
      city_id: number;
      city_name: string;
      province_id: number;
      province_name: string;
      country_id: number;
      country_name: string;
      lat: number;
      lng: number;
    };
    pricings: Pricing[];
  };

  pagination: {
    current_page: number;
    current_elements: number;
    total_pages: number;
    total_elements: number;
    sort_by: string[];
  };
}

interface Pricing {
  logistic: {
    id: number;
    name: string;
    logo_url: string;
    code: string;
    company_name: string;
  };
  rate: {
    id: number;
    name: string;
    type: string;
    description: string;
    full_description: string;
    is_hubless: boolean;
  };
  weight: number;
  volume: number;
  volume_weight: number;
  final_weight: number;
  min_day: number;
  max_day: number;
  unit_price: number;
  total_price: number;
  discount: number;
  discount_value: number;
  discounted_price: number;
  insurance_fee: number;
  must_use_insurance: boolean;
  liability_value: number;
  final_price: number;
  currency: string;
  insurance_applied: boolean;
}
