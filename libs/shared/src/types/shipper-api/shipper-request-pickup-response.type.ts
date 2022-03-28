import { ShipperRequestPickupDataType } from 'lib/shared/types/shipper-api/shipper-request-pickup-data.type';

export interface ShipperRequestPickupResponseType {
  metadata: {
    path: string;
    http_status_code: number;
    http_status: string;
    timestamp: number;
  };
  data: ShipperRequestPickupDataType;
}
