import { z } from "zod";

export const RateQuoteSchema = z.object({
  carrier: z.string(),
  service: z.string(),
  totalAmount: z.number(),
  currency: z.string(),
});

export const RateQuoteListSchema = z.array(RateQuoteSchema);

export type RateQuote = z.infer<typeof RateQuoteSchema>;
