import { z } from "zod";
import { AddressSchema } from "./address";
import { PackageSchema } from "./package";

export const RateRequestSchema = z.object({
  origin: AddressSchema,
  destination: AddressSchema,
  packages: z.array(PackageSchema),
  serviceLevel: z.string().optional(),
});

export type RateRequest = z.infer<typeof RateRequestSchema>;
