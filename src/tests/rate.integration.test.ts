import test from "node:test";
import { getRates } from "../service/rate.service";
import { expect } from "@jest/globals";

test("returns normalized UPS rates", async () => {
  const rates = await getRates({
    origin: { postalCode: "10001", countryCode: "US" },
    destination: { postalCode: "90001", countryCode: "US" },
    packages: [{ weight: 2 }],
  });

  expect(rates[0].carrier).toBe("UPS");
});
