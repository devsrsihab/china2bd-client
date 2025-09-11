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
      <SidebarProvider>
        <CommonSidebar />
        <SidebarInset>
          <Header />
          <main className="md:mt-[70px] ml-[45px] mt-[135px] overflow-hidden  p-2">
            <SidebarTrigger />

            {children}
            <MobileBottomAppBar />
          </main>
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </Providers>
  );
};

export default CommonLayout;
