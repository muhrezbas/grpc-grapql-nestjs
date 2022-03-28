export interface ShipperCreateOrderResponseType {
  metadata: {
    path: string;
    http_status_code: number;
    http_status: string;
    timestamp: number;
  };
  data: {
    coverage: string;
    external_id: string;
    order_id: string;
    payment_type: string;
    courier: {
      rate_id: number;
      amount: number;
      use_insurance: boolean;
      insurance_amount: number;
      cod: boolean;
    };
    consignee: {
      name: string;
      phone_number: string;
    };
    consigner: {
      name: string;
      phone_number: string;
    };
    destination: {
      address: string;
      area_id: number;
      area_name: string;
      city_id: number;
      city_name: string;
      country_id: number;
      country_name: string;
      lat: string;
      lng: string;
      postcode: string;
      province_id: number;
      province_name: string;
      suburb_id: number;
      suburb_name: string;
    };
    origin: {
      address: string;
      area_id: number;
      area_name: string;
      city_id: number;
      city_name: string;
      country_id: number;
      country_name: string;
      lat: string;
      lng: string;
      postcode: string;
      province_id: number;
      province_name: string;
      suburb_id: number;
      suburb_name: string;
    };
    package: {
      package_type: number;
      weight: number;
      length: number;
      width: number;
      height: number;
      price: number;
      items: [
        {
          id: number;
          name: string;
          qty: number;
          price: number;
        },
      ];
    };
  };
}
