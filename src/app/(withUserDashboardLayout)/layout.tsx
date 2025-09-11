"use client";
import { MobileBottomAppBar } from "@/components/mobile-bottom-appbar";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Navbar/Header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserAccountSidebar } from "@/components/user-account-common-sidebar";
import { Providers } from "@/lib/Providers";

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
      <SidebarProvider>
        <UserAccountSidebar />
        <SidebarInset>
          <Header />
          <main className="md:mt-[70px] ml-[35px] mt-[135px] overflow-hidden  p-2">
            <SidebarTrigger  />

            {children}
            <MobileBottomAppBar />
          </main>
          {/* <Footer /> */}
        </SidebarInset>
      </SidebarProvider>
    </Providers>
  );
};

export default UserLayout;
