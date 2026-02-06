import { z } from "zod";

export const AddressSchema = z.object({
  postalCode: z.string(),
  countryCode: z.string().length(2),
});

export type Address = z.infer<typeof AddressSchema>;
