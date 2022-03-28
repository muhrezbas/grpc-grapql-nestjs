export interface ShipperActiveLogisticResponseType {
  metadata: {
    path: string;
    http_status_code: number;
    http_status: string;
    timestamp: number;
  };
  data: [
    {
      logistic: {
        id: number;
        name: string;
        logo_url: string;
        code: string;
      };
      id: number;
      name: string;
      type_name: string;
      volumetric: number;
      min_kg: number;
      max_kg: number;
    },
  ];
}
