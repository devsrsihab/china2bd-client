"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useRegister } from "@/hooks/auth.hook";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HiExclamationCircle } from "react-icons/hi";
import { setTokenInCookie } from "@/utils/token";
import { useAuth } from "@/lib/Providers";

// ✅ Zod schema for validation (frontend)
const registerSchema = z.object({
  name: z.string().min(3, "Name is required"),
  phone: z.string().min(11, "Valid phone is required"),
  email: z.string().email("Invalid email").optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const { setAccessToken } = useAuth(); // ✅ bring setAccessToken into scope

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const {
    mutate: registerUser,
    isPending,
    isError,
    error,
    isSuccess,
  } = useRegister();

  const onSubmit = (values: RegisterFormValues) => {
    registerUser(values, {
      onSuccess: (res) => {
        const token = res?.data?.accessToken;
        if (token) setAccessToken(token); // 👈 auto-login
        router.push("/account");
      },
    });
  };

  let serverErrorMessage: string | null = null;
  if (isError && error instanceof Error) {
    const rawMessage = error.message;

    // Remove "Error: " prefix if present
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

  console.log("error message", serverErrorMessage);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <main className="flex-1 flex items-center justify-center px-4">
        <Card className="w-full max-w-md shadow-lg border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-lg font-semibold text-gray-800">
              নতুন একাউন্ট তৈরি করুন
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>নাম</FormLabel>
                      <FormControl>
                        <Input placeholder="আপনার পূর্ণ নাম লিখুন" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>মোবাইল নাম্বার</FormLabel>
                      <FormControl>
                        <Input placeholder="01839292281" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Email (optional) */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ইমেইল (ঐচ্ছিক)</FormLabel>
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>পাসওয়ার্ড</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="আপনার পাসওয়ার্ড লিখুন"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-white"
                  disabled={isPending}
                >
                  {isPending ? "রেজিস্টার হচ্ছে..." : "রেজিস্টার করুন"}
                </Button>

                {/* Error Message */}
                {isError && serverErrorMessage && (
                  <Alert
                    variant="destructive"
                    className="mt-4 border-l-4 border-red-600 bg-red-50/80 shadow-sm rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon inside circle */}
                      <div className="flex-shrink-0">
                        <div className="bg-red-100 rounded-full p-2">
                          <HiExclamationCircle className="h-6 w-6 text-red-600" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <AlertTitle className="font-semibold text-red-800 text-base">
                          রেজিস্ট্রেশন ব্যর্থ
                        </AlertTitle>
                        <AlertDescription className="mt-1 text-sm text-red-700 leading-relaxed">
                          {serverErrorMessage}
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                )}

                {/* Success */}
                {isSuccess && (
                  <Alert className="mt-4 border-l-4 border-green-600 bg-green-50/80 shadow-sm rounded-lg">
                    <div className="flex items-start gap-3">
                      {/* Icon inside circle */}
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
                          ✅ সফলভাবে একাউন্ট তৈরি হয়েছে!
                        </AlertTitle>
                        <AlertDescription className="mt-1 text-sm text-green-700 leading-relaxed">
                          আপনাকে লগইন পেইজে রিডাইরেক্ট করা হচ্ছে...
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                )}

                {/* Login Link */}
                <p className="text-sm text-center text-gray-600">
                  ইতিমধ্যেই একাউন্ট আছে?{" "}
                  <Link
                    href="/login"
                    className="text-primary font-medium hover:underline"
                  >
                    লগইন করুন
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

export default RegisterForm;
