"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";

export type AuthResponse = {
  success: boolean;
  message: string;
  data?: any;
  accessToken?: string;
  refreshToken?: string;
};

// Register
export const registerUser = async (payload: {
  name: string;
  phone: string;
  email?: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/register", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Login
export const loginUser = async (payload: { email?: string; phone?: string; password: string }) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/login", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Change Password
export const changePassword = async (payload: { oldPassword: string; newPassword: string }) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/change-password", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Refresh Token
export const refreshToken = async () => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/refresh-token", {});
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Forget Password
export const forgetPassword = async (payload: { email: string }) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/forget-password", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Reset Password
export const resetPassword = async (payload: { email: string; newPassword: string }) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/reset-password", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Send OTP
export const sendOtp = async (payload: { phone: string }) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/send-otp", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Verify OTP
export const verifyOtp = async (payload: { phone: string; otp: string }) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/verify-otp", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
