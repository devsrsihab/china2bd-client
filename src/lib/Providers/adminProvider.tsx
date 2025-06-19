"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

export function AdminProviders({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors expand={true} />
      <ThemeProvider attribute="class" defaultTheme="system">
        <AntdThemeProvider>{children}</AntdThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// ✅ Custom Ant Design Dark Theme with bg-gray-800
function AntdThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = theme === "dark" || resolvedTheme === "dark";
  // If theme is still loading, don't render Ant Design theme yet
  const isThemeLoaded = theme !== undefined;

  if (!isThemeLoaded) {
    // Show a full-screen loader before theme is ready
    return (
      <div
        className="flex justify-center items-center bg-gray-100 dark:bg-gray-900"
        style={{ height: "100vh" }}
      >
        {/* <Spin size="large" tip="Loading Theme..." /> */}
      </div>
    );
  }

  return (
    // isThemeLoaded && (
    //   <ConfigProvider
    //     theme={{
    //       algorithm: isDarkMode
    //         ? antdTheme.darkAlgorithm
    //         : antdTheme.defaultAlgorithm,
    //       token: {
    //         colorBgBase: isDarkMode ? "#1f2937" : "#ffffff", // Tailwind's gray-800
    //         colorBgContainer: isDarkMode ? "#1f2937" : "#ffffff",
    //         colorBgLayout: isDarkMode ? "#1f2937" : "#ffffff",
    //         colorBorder: isDarkMode ? "#1f2937" : "#e5e7eb", // Custom border color
    //       },
    //     }}
    //   >
    //     <div
    //       className={
    //         isDarkMode ? "dark !bg-gray-800 text-white" : "bg-white text-black"
    //       }
    //     >
    //       {children}
    //     </div>
    //   </ConfigProvider>
    // )
    <h2>admin provider</h2>
  );
}
