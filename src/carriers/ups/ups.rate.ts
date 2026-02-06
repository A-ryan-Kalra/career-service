import { getUpsAccessToken } from "./ups.auth";
import { parseUpsRateResponse } from "./ups.mapper";
import { post } from "../../http/httpClient";
import { Carrier } from "../carrier.types";

export const upsCarrier: Carrier = {
  async getRates(request) {
    const token = await getUpsAccessToken();
    const response = await post("/rating", request, token);
    return parseUpsRateResponse(response);
  },
};
