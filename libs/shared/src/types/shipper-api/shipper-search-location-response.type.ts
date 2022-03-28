export interface ShipperSearchLocationResponseType {
  metadata: {
    path: string;
    http_status_code: number;
    http_status: string;
    timestamp: number;
  };
  data: [
    {
      adm_level_1: {
        id: number;
        level: number;
        type: string;
        name: string;
        code: string;
      };
      adm_level_2: {
        id: string;
        level: number;
        type: string;
        name: string;
      };
      adm_level_3: {
        id: number;
        level: number;
        type: string;
        name: string;
        geo_coord: {
          lat: number;
          lng: number;
        };
      };
      adm_level_4: {
        id: string;
        level: string;
        type: string;
        name: string;
        geo_coord: {
          lat: number;
          lng: number;
        };
      };
      adm_level_5: {
        id: number;
        level: number;
        type: string;
        name: string;
        geo_coord: {
          lat: number;
          lng: number;
        };
        postcode: string;
      };
      adm_level_cur: {
        id: string;
        level: string;
        type: string;
        name: string;
        geo_coord: {
          lat: number;
          lng: number;
        };
        postcode: number;
      };
      display_txt: string;
      postcodes: [];
    },
  ];
}
