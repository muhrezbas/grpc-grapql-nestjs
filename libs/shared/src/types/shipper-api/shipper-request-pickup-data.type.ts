export interface ShipperRequestPickupDataType {
  order_activations: [
    {
      order_id: string;
      pickup_code: string;
      is_activate: boolean;
      pickup_time: string;
    },
  ];
}
