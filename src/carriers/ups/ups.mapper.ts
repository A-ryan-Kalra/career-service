import { AppError } from "../../models/error";
import { RateQuoteListSchema } from "../../models/rate-quote";

export function parseUpsRateResponse(data: any) {
  try {
    const shipments = data?.RateResponse?.RatedShipment;

    if (!Array.isArray(shipments)) {
      throw new Error();
    }

    const normalized = shipments.map((s: any) => ({
      carrier: "UPS",
      service: s.Service.Description,
      totalAmount: Number(s.TotalCharges.MonetaryValue),
      currency: s.TotalCharges.CurrencyCode,
    }));

    return RateQuoteListSchema.parse(normalized);
  } catch {
    throw new AppError(
      "INVALID_CARRIER_RESPONSE",
      "UPS returned malformed response",
      502,
    );
  }
}
