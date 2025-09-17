import { jwtDecode } from "jwt-decode";

export type DecodedToken = {
  email?: string;
  role?: string;
  iat?: number;
  exp?: number;
  [key: string]: any; // fallback for extra claims
};

/**
 * Decode a JWT access token safely
 * @param token - JWT string
 * @returns DecodedToken or null
 */
export function decodeToken(token: string | null): DecodedToken | null {
  if (!token) return null;

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded;
  } catch (error) {
    console.error("❌ Failed to decode token:", error);
    return null;
  }
}

/**
 * Check if a token is expired
 * @param token - JWT string
 * @returns true if expired, false otherwise
 */
export function isTokenExpired(token: string | null): boolean {
  if (!token) return true;
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    if (!decoded.exp) return true;
    const now = Date.now() / 1000; // in seconds
    return decoded.exp < now;
  } catch {
    return true;
  }
}
