import { carriers } from "../carriers/carrier.registry";
import { RateRequest } from "../models/rate-request";

export const getRates = async (request: RateRequest) => {
  /*
  Default for now
  More services can be added later like fedEx.
  */
  const carrier = carriers.UPS;
  return carrier.getRates(request);
};
