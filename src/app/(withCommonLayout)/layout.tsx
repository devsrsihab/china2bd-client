"use client";
import CategoryHeader from "@/components/category-header";
import { CommonSidebar } from "@/components/common-sidebar";
import { MobileBottomAppBar } from "@/components/mobile-bottom-appbar";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Navbar/Header";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Providers } from "@/lib/Providers";
import { useState } from "react";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // use state for open and close sidebar
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <Providers>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "18rem",
          } as React.CSSProperties
        }
      >
        <CommonSidebar setIsOpenSidebar={setIsOpenSidebar} />
        <SidebarInset>
          <Header />
          <main className="md:mt-24 mt-[135px] w-full ">
            <SidebarTrigger className="" />

            <CategoryHeader />
            {children}
          </main>
        </SidebarInset>
        <MobileBottomAppBar />
      </SidebarProvider>
      <Footer />
    </Providers>
  );
};

export default CommonLayout;
