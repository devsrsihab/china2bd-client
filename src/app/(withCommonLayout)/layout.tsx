import { CommonSidebar } from "@/components/common-sidebar";
import { MobileBottomAppBar } from "@/components/mobile-bottom-appbar";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Navbar/Header";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Providers } from "@/lib/Providers";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
      <Header />

      <SidebarProvider open={true}>
        <CommonSidebar />
        <main className="mt-[184px] ml-16">
          <SidebarTrigger className="cursor-pointer text-[55px] text-primary hover:text-primary" />
          {/* shadcn button */}
          <Button>Open</Button>
          {children}
        </main>
      </SidebarProvider>
      <MobileBottomAppBar />
      <Footer />
    </Providers>
  );
};

export default CommonLayout;
