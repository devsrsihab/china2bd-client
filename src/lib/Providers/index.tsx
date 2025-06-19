"use client";

import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";

const PathnameContext = React.createContext<string | undefined>(undefined);

const queryClient = new QueryClient();
interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
  return (
    <PathnameContext.Provider value={pathname}>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors expand={true} />
        {children}
      </QueryClientProvider>
    </PathnameContext.Provider>
  );
}
