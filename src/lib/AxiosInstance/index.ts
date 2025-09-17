import axios from "axios";
import envConfig from "@/config/envConfig";
import { cookies } from "next/headers";
import { getNewAccessToken, setTokenInCookie } from "@/utils/token";
import { getTokenFromCookies } from "@/utils/getTokenFromCookies";

const axiosInstance = axios.create({
  baseURL: envConfig.serverApi,
  withCredentials: true,
});

// ✅ Request interceptor
axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("c2bdAccessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// ✅ Response interceptor
axiosInstance.interceptors.response.use(
  async function (response) {
    const setCookieHeaders = response.headers["set-cookie"] as string[];

    if (setCookieHeaders) {
      const accessToken = getTokenFromCookies(
        setCookieHeaders,
        "c2bdAccessToken"
      );
      const refreshToken = getTokenFromCookies(
        setCookieHeaders,
        "c2bdRefreshToken"
      );

      if (accessToken) {
        await setTokenInCookie(accessToken, refreshToken);
      }
    }

    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const newToken = await getNewAccessToken();

      if (newToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      }
    }

    return Promise.reject(
      new Error(JSON.stringify(error.response?.data || error.message))
    );
  }
);

export default axiosInstance;
