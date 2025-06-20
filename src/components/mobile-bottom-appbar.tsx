// components/MobileBottomAppBar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, User, Phone, MessageCircle } from "lucide-react";
import diamonIcon from "@/assets/icons/diamon.svg";

export const MobileBottomAppBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        {/* Category Button */}
        <button
          aria-label="Category"
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
        >
          <Menu className="w-5 h-5" />
          <span className="text-xs">Category</span>
        </button>

        {/* Account Link */}
        <Link
          href="/account"
          aria-label="Account"
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Account</span>
        </Link>

        {/* Home Icon (center) */}
        <Link
          href="/"
          aria-label="Home"
          className="bg-[#167389] rounded-full -mt-10 shadow-lg p-2 border border-gray-200"
        >
          <Image
            src={diamonIcon.src}
            alt="Home"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Phone Link */}
        <a
          href="tel:+8809613828606"
          aria-label="Call"
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs">Call</span>
        </a>

        {/* Chat Link */}
        <a
          href="https://m.me/153346908438921"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat"
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs">Chat</span>
        </a>
      </div>
    </nav>
  );
};
