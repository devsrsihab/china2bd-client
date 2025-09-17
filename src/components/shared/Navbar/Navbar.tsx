"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import {
  FaCamera,
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import avaterImg from "@/assets/images/avater.png";
import logoImg from "@/assets/images/logo.png";
import { useAuth } from "@/lib/Providers";

const Navbar = () => {
  const { currentUser } = useAuth(); // ✅ এখন ঠিকমত কাজ করবে

  console.log("current user info ===>", currentUser);

  return (
    <nav className="bg-primary z-[999999] fixed top-0 left-0 w-full sm:px-7 sm:py-2 py-2 px-4">
      <div className="flex items-center w-full justify-between">
        {/* Logo */}
        <div className="flex-[2_1] object-contain justify-self-start flex">
          <Link href="/" aria-label="logo">
            <Image
              className="h-[54px] object-cover"
              src={logoImg.src}
              alt="logo"
              width={125}
              height={54}
            />
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-white rounded-[50px] overflow-hidden flex-[3_1] h-[40px] pl-4">
          <div className="flex items-center">
            <div className="cursor-pointer mt-1">
              <FaCamera className="text-[#555]" size={22} />
            </div>
            <input
              type="file"
              accept="image/*"
              id="pcSearchinput"
              className="fixed -top-[100em]"
            />
          </div>
          <input
            type="text"
            autoComplete="off"
            name="search"
            id="pcSearch"
            placeholder="Search by keyword"
            className="flex-1 outline-none px-2"
          />
          <div className="bg-black h-[42px] flex items-center justify-center px-3">
            <FaSearch className="text-white" size={20} />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center flex-[2_1] justify-end">
          <Link href="/cart" className="mr-4 flex relative">
            <FaShoppingCart className="text-white" size={28} />
          </Link>
          <Link href="/wishlist" className="mr-4 flex relative">
            <FaHeart className="text-white" size={28} />
          </Link>

          {currentUser ? (
            <Link href="/account" className="text-white no-underline">
              <div className="flex items-center justify-center">
                <Avatar className="mr-[0.65rem]">
                  <AvatarImage src={avaterImg.src} />
                </Avatar>
                <div className="hidden md:flex flex-col">
                  <p className="mb-0 leading-5">
                    {currentUser?.name || "User"}
                  </p>
                  <span className="text-[12px]">
                    {currentUser?.email || ""}
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <Link href="/login" className="text-white">
              <FaUser size={28} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
