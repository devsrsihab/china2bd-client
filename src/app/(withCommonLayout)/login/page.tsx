"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

import { useLogin } from "@/hooks/auth.hook"; // ⬅️ আপনার login hook
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HiExclamationCircle } from "react-icons/hi";
import { setTokenInCookie } from "@/utils/token";
import { useAuth } from "@/lib/Providers";

// ✅ Schema
const loginSchema = z.object({
  email: z.string().email("সঠিক ইমেইল দিন"),
  password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();
  const { setAccessToken } = useAuth(); // ✅ bring setAccessToken into scope

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    mutate: loginUser,
    isPending,
    isError,
    error,
    isSuccess,
  } = useLogin();

  const onSubmit = (values: LoginFormValues) => {
    loginUser(values, {
      onSuccess: (res) => {
        const token = res?.data?.accessToken; // আপনার API shape অনুযায়ী
        if (token) setAccessToken(token); // 👈 এটা খুব জরুরি
        router.push("/account");
      },
    });
  };

  // ✅ Extract server error message
  let serverErrorMessage: string | null = null;
  if (isError && error instanceof Error) {
    const rawMessage = error.message;

    // Remove "Error: " prefix
    const cleanMessage = rawMessage.startsWith("Error: ")
      ? rawMessage.replace("Error: ", "")
      : rawMessage;

    if (
      cleanMessage.trim().startsWith("{") &&
      cleanMessage.trim().endsWith("}")
    ) {
      try {
        const parsed = JSON.parse(cleanMessage);
        serverErrorMessage =
          parsed?.errorSources?.[0]?.message ||
          parsed?.message ||
          "কিছু ভুল হয়েছে, আবার চেষ্টা করুন।";
      } catch {
        serverErrorMessage = cleanMessage;
      }
    } else {
      serverErrorMessage = cleanMessage;
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <main className="flex-1 flex items-center justify-center px-4">
        <Card className="w-full max-w-md shadow-lg border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-lg font-semibold text-gray-800">
              এখানে আপনার মোবাইল নাম্বার / ইমেইল দিয়ে লগিন করুন
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ইমেইল</FormLabel>
                      <FormControl>
                        <Input placeholder="example@email.com" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => {
                    const [showPassword, setShowPassword] =
                      React.useState(false);

                    return (
                      <FormItem>
                        <FormLabel>পাসওয়ার্ড</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="আপনার পাসওয়ার্ড লিখুন"
                              {...field}
                              className="pr-10" // right padding for icon
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                              onClick={() => setShowPassword((prev) => !prev)}
                              tabIndex={-1}
                            >
                              {showPassword ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zM10 15c-2.76 0-5-2.24-5-5s2.24-5 
                  5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3.707 3.293a1 1 0 00-1.414 1.414l1.73 1.73C2.1 8.004 1 10 1 10s3 7 9 7c1.72 0 3.27-.42 4.56-1.08l1.73 
                    1.73a1 1 0 001.414-1.414l-14-14zM10 15c-2.76 0-5-2.24-5-5 0-.77.17-1.5.47-2.15l1.57 1.57a3 3 0 003.41 3.41l1.57 
                    1.57c-.65.3-1.38.47-2.02.47z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    );
                  }}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-white"
                  disabled={isPending}
                >
                  {isPending ? "লগইন হচ্ছে..." : "লগইন করুন"}
                </Button>

                {/* Error Alert */}
                {isError && serverErrorMessage && (
                  <Alert
                    variant="destructive"
                    className="mt-4 border-l-4 border-red-600 bg-red-50/80 shadow-sm rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="bg-red-100 rounded-full p-2">
                          <HiExclamationCircle className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <AlertTitle className="font-semibold text-red-800 text-base">
                          লগইন ব্যর্থ
                        </AlertTitle>
                        <AlertDescription className="mt-1 capitalize text-sm text-red-700 leading-relaxed">
                          {serverErrorMessage}
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                )}

                {/* Success Alert */}
                {isSuccess && (
                  <Alert className="mt-4 border-l-4 border-green-600 bg-green-50/80 shadow-sm rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="bg-green-100 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <AlertTitle className="font-semibold text-green-800 text-base">
                          ✅ লগইন সফল
                        </AlertTitle>
                        <AlertDescription className="mt-1 text-sm text-green-700 leading-relaxed">
                          আপনাকে অ্যাকাউন্ট পেইজে রিডাইরেক্ট করা হচ্ছে...
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                )}

                {/* Register Link */}
                <p className="text-sm text-center text-gray-600">
                  একাউন্ট নেই?{" "}
                  <Link
                    href="/register"
                    className="text-primary font-medium hover:underline"
                  >
                    নতুন একাউন্ট তৈরি করুন
                  </Link>
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LoginPage;
