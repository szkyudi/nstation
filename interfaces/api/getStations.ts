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
  return arg.station && arg.station.length > 0;
}

export type GetStationResponse = SuccessResponse | NotFoundResponse;
