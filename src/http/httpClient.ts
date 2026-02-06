export async function post(_url: string, _body: any, _token: string) {
  // STUBBED UPS RESPONSE
  return {
    RateResponse: {
      RatedShipment: [
        {
          Service: { Description: "Ground" },
          TotalCharges: {
            CurrencyCode: "USD",
            MonetaryValue: "120.00",
          },
        },
      ],
    },
  };
}
