import Cookies from "js-cookie";

const TokenKey = "token";

export function getToken(): string {
  return Cookies.get(TokenKey);
}

export function setToken(token: string): string {
  Cookies.set("SameSite", "Strict");
  return Cookies.set(TokenKey, token);
}

export function removeToken(): string {
  return Cookies.remove(TokenKey);
}
