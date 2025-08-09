"use client";

import { ReactNode } from "react";
// import { AdminProviders } from "@/lib/Providers/adminProvider";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <div>{children}</div>;
}
