"use client";
import { CommonSidebar } from "@/components/common-sidebar";
import { MobileBottomAppBar } from "@/components/mobile-bottom-appbar";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Navbar/Header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Providers } from "@/lib/Providers";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
        <CommonSidebar />
        <SidebarInset>
          <Header />
          <main className="md:mt-[70px] mt-[135px] w-full p-2">
            <SidebarTrigger className="hidden md:block " />

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
