"use client";

import { ReactNode } from "react";
import "../../styles/globals.css";
import { AdminProviders } from "@/lib/Providers/adminProvider";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AdminProviders>
      <h2>layout dashboard</h2>
      {children}
    </AdminProviders>
  );
}
