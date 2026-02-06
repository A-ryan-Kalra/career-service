import { z } from "zod";

export const PackageSchema = z.object({
  weight: z.number().positive(),
});

export type Package = z.infer<typeof PackageSchema>;
