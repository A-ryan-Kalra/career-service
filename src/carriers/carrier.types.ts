import { RateQuote } from "../models/rate-quote";
import { RateRequest } from "../models/rate-request";

export type Carrier = {
  getRates(request: RateRequest): Promise<RateQuote[]>;
};
