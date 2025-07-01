"use client";
import { CommonSidebar } from "@/components/common-sidebar";
import Container from "@/components/Container";
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
          <main className="md:mt-[70px] mt-[135px] overflow-hidden  p-2">
            <SidebarTrigger className="hidden md:block " />

            <Container> {children}</Container>
            <MobileBottomAppBar />
          </main>
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </Providers>
  );
};

export default CommonLayout;
