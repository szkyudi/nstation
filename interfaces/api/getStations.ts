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

interface NotFoundResponse {
  response: {
    error: string;
  }
}

interface SuccessResponse {
  response: {
    station: Station[]
  }
}

export const isGetStationResponse = (arg: any): arg is SuccessResponse => {
  return arg.response.station && arg.response.station.length > 0;
}

export type GetStationResponse = SuccessResponse | NotFoundResponse;
