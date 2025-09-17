// src/lib/Providers.tsx
"use client";

import * as React from "react";
import { jwtDecode } from "jwt-decode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

export type DecodedToken = {
  email?: string;
  role?: string;
  name?: string;
  phone?: string;
  exp?: number;
};

type TokenContextType = {
  currentUser: DecodedToken | null;
  setAccessToken: (token: string | null) => void; // call this after login/register/refresh
  logout: () => void; // ✅ add logout
};

const TokenContext = React.createContext<TokenContextType | undefined>(
  undefined
);
export const useAuth = () => {
  const ctx = React.useContext(TokenContext);
  if (!ctx) throw new Error("useAuth must be used inside TokenProvider");
  return ctx;
};

const queryClient = new QueryClient();
const COOKIE_NAME = "c2bdAccessToken";

// --- Cookie helpers ---
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
};

const setCookie = (
  name: string,
  value: string,
  maxAgeSeconds: number = 60 * 60 * 24 * 7 // 7 days
) => {
  if (typeof document === "undefined") return;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax${secure}`;
};

const deleteCookie = (name: string) => {
  if (typeof document === "undefined") return;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
};

// -----------------------

export function Providers({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessTokenState] = React.useState<string | null>(
    null
  );
  const [currentUser, setCurrentUser] = React.useState<DecodedToken | null>(
    null
  );

  // 1) Load once on mount (from cookie)
  React.useEffect(() => {
    const t = getCookie(COOKIE_NAME);
    if (t) setAccessTokenState(t);
  }, []);

  // 2) Listen same-tab custom event (login/register/refresh will dispatch)
  React.useEffect(() => {
    const onTokenChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { token?: string | null };
      setAccessTokenState(detail?.token ?? null);
    };
    window.addEventListener(
      "auth:token-changed",
      onTokenChange as EventListener
    );
    return () =>
      window.removeEventListener(
        "auth:token-changed",
        onTokenChange as EventListener
      );
  }, []);

  // 3) Keep cookie in sync + decode
  React.useEffect(() => {
    if (accessToken) {
      setCookie(COOKIE_NAME, accessToken); // ✅ save to cookie
      try {
        setCurrentUser(jwtDecode<DecodedToken>(accessToken));
      } catch {
        setCurrentUser(null);
      }
    } else {
      deleteCookie(COOKIE_NAME); // ✅ clear cookie
      setCurrentUser(null);
    }
  }, [accessToken]);

  // 4) expose setter for components/services
  const setAccessToken = (token: string | null) => {
    setAccessTokenState(token);
    // broadcast for same-tab listeners
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("auth:token-changed", { detail: { token } })
      );
    }
  };

  const logout = () => {
    setAccessToken(null); // 👈 this clears cookie + currentUser
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TokenContext.Provider value={{ currentUser, setAccessToken, logout }}>
        <Toaster richColors expand={true} />
        {children}
      </TokenContext.Provider>
    </QueryClientProvider>
  );
}
