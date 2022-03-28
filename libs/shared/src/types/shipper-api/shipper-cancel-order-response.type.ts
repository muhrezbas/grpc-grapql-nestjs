export interface ShipperCancelOrderResponse {
  metadata: {
    path: string;
    http_status_code: number;
    http_status: string;
    timestamp: number;
  };
  data: {
    cancel_order: {
      order_id: string;
      cancel: boolean;
    };
  };
}
