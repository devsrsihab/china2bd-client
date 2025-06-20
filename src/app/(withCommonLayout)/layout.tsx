import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Navbar/Header";
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

      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <Footer />
    </Providers>
  );
};

export default CommonLayout;
