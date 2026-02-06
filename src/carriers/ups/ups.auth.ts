import { AppError } from "../../models/error";

let cachedToken: string | null = null;
let expiresAt = 0;

export async function getUpsAccessToken(): Promise<string> {
  const now = Date.now();

  if (cachedToken && now < expiresAt) {
    return cachedToken;
  }

  // STUBBED OAuth call
  const oauthResponse = {
    access_token: "mock-ups-access-token",
    expires_in: 1800,
  };

  if (!oauthResponse.access_token) {
    throw new AppError("AUTH_FAILED", "UPS authentication failed", 401);
  }

  cachedToken = oauthResponse.access_token;
  expiresAt = now + oauthResponse.expires_in * 1000;

  return cachedToken;
}
