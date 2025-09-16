import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Load Google Font
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// ✅ Correct metadata export (Next.js will inject into <head>)
export const metadata: Metadata = {
  title: "China2BD - Best China Sourcing Solutions In Bangladesh.",
  description: "China2BD is the best China sourcing platform in Bangladesh.",
  metadataBase: new URL("https://www.china2bd.com"), // optional
  openGraph: {
    title: "China2BD - Best China Sourcing Solutions In Bangladesh.",
    description:
      "China2BD helps businesses source products from China efficiently.",
    url: "https://www.china2bd.com",
    siteName: "China2BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "China2BD - Best China Sourcing Solutions In Bangladesh.",
    description: "Best China sourcing platform in Bangladesh.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      <body className={`bg-[#f7f7f7] ${jost.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
