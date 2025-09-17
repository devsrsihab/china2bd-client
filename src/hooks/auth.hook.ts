"use client";

import {
  registerUser,
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPassword,
  sendOtp,
  verifyOtp,
} from "@/services/Auth";
import { useMutation, useQuery } from "@tanstack/react-query";

// Register
export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

// Login
export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};

// Change Password
export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,
  });
};

// Refresh Token (use as needed, manual trigger)
export const useRefreshToken = () => {
  return useQuery({
    queryKey: ["REFRESH_TOKEN"],
    queryFn: refreshToken,
    enabled: false, // manual trigger
    refetchOnWindowFocus: false,
  });
};

// Forget Password
export const useForgetPassword = () => {
  return useMutation({
    mutationFn: forgetPassword,
  });
};

// Reset Password
export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};

// Send OTP
export const useSendOtp = () => {
  return useMutation({
    mutationFn: sendOtp,
  });
};

// Verify OTP
export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};
