// components/MobileBottomAppBar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, User, Phone, MessageCircle } from "lucide-react";
import diamonIcon from "@/assets/icons/diamon.svg";
import { SidebarTrigger } from "./ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

export const MobileBottomAppBar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  // Prevent hydration mismatch and allow SSR-safe rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <nav className="fixed bottom-[0%] left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50">
      <div className="grid grid-cols-5 h-16 justify-center items-center bottomBar">
        {/* Category Button */}
        <div className="item">
          <div
            aria-label="Category"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition cursor-pointer"
          >
            {isMounted ? (
              <SidebarTrigger className="cursor-pointer text-[55px] text-primary hover:text-primary" />
            ) : (
              <Skeleton className="w-[24px] h-[24px] rounded-md bg-gray-200" />
            )}
            <span className="text-xs text-primary">Category</span>
          </div>
        </div>

        {/* Account Link */}
        <div className="item">
          <Link
            href="/account"
            aria-label="Account"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
          >
            <User className="w-5 h-5 text-primary" />
            <span className="text-xs text-primary">Account</span>
          </Link>
        </div>

        {/* Home Icon (center) */}
        <div className="item">
          <Link
            href="/"
            aria-label="Home"
            className="flex justify-center items-center"
          >
            <div className="w-15 h-15 rounded-full flex items-center justify-center   select-none shadow-md bg-primary ">
              <Image
                src={diamonIcon.src}
                alt="Home"
                width={40}
                height={40}
                className="object-contain w-[40px] h-[40px] "
              />
            </div>
          </Link>
        </div>

        {/* Phone Link */}
        <div className="item">
          <a
            href="tel:+8809613828606"
            aria-label="Call"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-xs text-primary">Call</span>
          </a>
        </div>

        {/* Chat Link */}
        <div className="item">
          <a
            href="https://m.me/153346908438921"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-xs text-primary">Chat</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
