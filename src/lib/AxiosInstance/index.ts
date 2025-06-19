import axios from "axios";
import { cookies } from "next/headers";
import envConfig from "@/config/envConfig";
import { getTokenFromCookies } from "@/utils/getTokenFromCookies";

const axiosInstance = axios.create({
  baseURL: envConfig.serverApi,
  withCredentials: true, // ✅ Ensure cookies are sent with requests
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("realStateAccessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async function (response) {
    // Extract and set new tokens if available in the response headers
    await handleTokenInResponse(response.headers["set-cookie"] as string[]);

    return response;
  },

  async function (error) {
    const config = error.config;

    if (error.response) {
      const serverError =
        error.response?.data || "Something went wrong on the server.";

      return Promise.reject(new Error(JSON.stringify(serverError)));
    }

    // if error responsce
    if (error?.response?.status === 401 && !config?.sent) {
      // set the sent flag to true , so that this block of code is not executed again
      config.sent = true;
      // const res = await getNewAccessToken();
      // const accessToken = res?.data?.accessToken;

      // set the token in authorization header
      // config.headers["Authorization"] = accessToken;
      // const cookieStore = await cookies();
      // cookieStore.set("accessToken", accessToken);

      // retry the request
      return axiosInstance(config);
    }
  }
);

// Function to handle tokens from response cookies
const handleTokenInResponse = async (setCookieHeaders: string[]) => {
  if (!setCookieHeaders) return;

  const accessToken = getTokenFromCookies(
    setCookieHeaders,
    "realStateAccessToken"
  );
  // if (accessToken) {
  //   await setTokenInCookies(
  //     "realStateAccessToken",
  //     accessToken,
  //     7 * 24 * 60 * 60
  //   ); // 7 days
  // }

  const refreshToken = getTokenFromCookies(
    setCookieHeaders,
    "realStateRefreshToken"
  );
  // if (refreshToken) {
  //   await setTokenInCookies(
  //     "realStateRefreshToken",
  //     refreshToken,
  //     30 * 24 * 60 * 60
  //   ); // 30 days
  // }
};

export default axiosInstance;
