import { Station } from "../station";

interface GetStationBaseRequest {
  method: 'getStations';
  prefecture?: string;
};

interface GetStationByLineRequest extends GetStationBaseRequest {
  line: string;
}

interface GetStationByNameRequest extends GetStationBaseRequest {
  name: string;
}

export type GetStationRequest = GetStationByLineRequest | GetStationByNameRequest;


export interface GetStationResponse {
  response: {
    station: Station[]
  }
}
