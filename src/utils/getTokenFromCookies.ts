export function getTokenFromCookies(
  setCookieHeaders: string[],
  tokenName: string
) {
  const tokenString = setCookieHeaders.find((cookie) =>
    cookie.startsWith(`${tokenName}=`)
  );
  if (!tokenString) return null; // Token not found

  return tokenString.split(`${tokenName}=`)[1].split(";")[0]; // Extract token value
}
