export interface ShipperDetailOrderResponseType {
  metadata: {
    path: string;
    http_status_code: number;
    http_status: string;
    timestamp: number;
  };
  data: {
    consignee: {
      name: string;
      phone_number: string;
    };
    consigner: {
      name: string;
      phone_number: string;
    };
    origin: {
      id: number;
      stop_id: number;
      address: string;
      direction: string;
      postcode: string;
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
      lat: string;
      lng: string;
    };
    destination: {
      id: number;
      stop_id: number;
      address: string;
      direction: string;
      postcode: string;
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
      lat: string;
      lng: string;
    };
    external_id: string;
    order_id: string;
    courier: {
      name: string;
      rate_id: number;
      rate_name: string;
      amount: number;
      use_insurance: boolean;
      insurance_amount: number;
      cod: boolean;
      min_day: number;
      max_day: number;
    };
    package: {
      weight: number;
      length: number;
      width: number;
      height: number;
      volume_weight: number;
      package_type: number;
      items: Item[];
    };
    payment_type: string;
    driver: {
      name: string;
      phone: string;
      vehicle_type: string;
      vehicle_number: string;
    };
    label_check_sum: string;
    creation_date: string;
    last_updated_date: string;
    awb_number: string;
    trackings: Tracking[];
    is_active: boolean;
    is_hubless: boolean;
    pickup_code: string;
    pickup_time: string;
    shipment_status: {
      name: string;
      description: string;
      code: number;
      updated_by: string;
      updated_date: string;
      track_url: string;
      reason: string;
      created_date: string;
    };
  };
}

interface Item {
  id: number;
  name: string;
  price: number;
  qty: number;
}

interface Tracking {
  shipper_status: {
    code: number;
    name: string;
    description: string;
  };
  logistic_status: {
    code: number;
    name: string;
    description: string;
  };
  created_date: string;
}
