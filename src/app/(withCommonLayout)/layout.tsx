"use client";
import { CommonSidebar } from "@/components/common-sidebar";
import { MobileBottomAppBar } from "@/components/mobile-bottom-appbar";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Navbar/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Providers } from "@/lib/Providers";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <SidebarProvider>
        <CommonSidebar />
        <SidebarInset>
          <Header />

          {/* ✅ Responsive spacing without hardcoded margins */}
          <main
            className="
                w-full
                pt-[120px] md:pt-[72px]    
                px-2 sm:px-4 lg:px-6
                min-h-screen
                bg-gray-50
              "
          >
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
