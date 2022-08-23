import { Line } from "../line";

interface GetLinesBaseRequest {
  method: 'getLines';
};

interface GetLinesByAreaRequest extends GetLinesBaseRequest {
  area: string;
}

interface GetLinesByPrefectureRequest extends GetLinesBaseRequest {
  prefecture: string;
}

export type GetLinesRequest = GetLinesByAreaRequest | GetLinesByPrefectureRequest;

export interface GetLinesResponse {
  response: {
    line: Line[]
  }
}
