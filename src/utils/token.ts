"use server";

import envConfig from "@/config/envConfig";
import { cookies } from "next/headers";

export const getNewAccessToken = async (): Promise<string | null> => {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("c2bdRefreshToken")?.value;

    if (!refreshToken) {
      throw new Error("No refresh token found");
    }

    const response = await fetch(`${envConfig.serverApi}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to get new access token");
    }

    const data = await response.json();

    if (data?.accessToken) {
      await setTokenInCookie(data.accessToken, data.refreshToken);
    }

    return data.accessToken || null;
  } catch (error) {
    console.error("Error fetching new access token:", error);
    return null;
  }
};

/**
 * Set tokens in cookies
 */
export const setTokenInCookie = async (
  accessToken: string,
  refreshToken?: string | null   // <-- allow null
): Promise<void> => {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "c2bdAccessToken",
    value: accessToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  if (refreshToken) {
    cookieStore.set({
      name: "c2bdRefreshToken",
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }
};


/**
 * Remove tokens
 */
export const removeTokenFromCookie = async (): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.delete("c2bdAccessToken");
  cookieStore.delete("c2bdRefreshToken");
};

export const getAccessToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  return cookieStore.get("c2bdAccessToken")?.value || null;
};
