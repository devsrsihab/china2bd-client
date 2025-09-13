import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import avaterImg from "@/assets/images/avater.png";
import logoImg from "@/assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-primary z-[999999] fixed top-0 left-0 w-full sm:px-7 sm:py-2 py-2 px-4">
      <div className="flex items-center w-full justify-between  ">
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
            <label htmlFor="pcSearchinput" className="fixed -top-[100em]">
              Image Search
            </label>
            <input
              name="uploadImage"
              type="file"
              accept="image/*"
              id="pcSearchinput"
              className="fixed -top-[100em]"
            />
          </div>
          <label htmlFor="pcSearch" className="w-0 overflow-hidden">
            Search
          </label>
          <input
            type="text"
            autoComplete="off"
            name="search"
            id="pcSearch"
            placeholder="Search by keyword"
            className="flex-1 outline-none px-2"
          />
          <div className="bg-black h-[42px] rounded-none rounded-tr-[4px] rounded-br-[4px] p-0 flex items-center justify-center px-3">
            <FaSearch className="text-white" size={20} />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-center flex-[2_1] justify-end">
          <a href="/cart" className="mr-4 flex relative">
            <FaShoppingCart className="text-white" size={28} />
          </a>
          <a href="/wishlist" className="mr-4 flex relative">
            <FaHeart className="text-white" size={28} />
          </a>
          <a href="/account" className="text-white no-underline">
            <div className="flex items-center justify-center">
              <Avatar className="mr-[0.65rem]">
                <AvatarImage src={avaterImg.src} />
              </Avatar>
              <div className="hidden md:flex flex-col">
                <p className="mb-0 leading-5">Quasi quae qui qui v</p>
                <span className="text-[12px]">md.srsihabzone@gmail.com</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="flex md:hidden items-center bg-white rounded-[50px] overflow-hidden h-[40px] pl-4  my-2">
        <div className="flex items-center">
          <div className="cursor-pointer mt-1">
            <FaCamera className="text-[#555]" size={22} />
          </div>
          <label htmlFor="phoneSearchinput" className="fixed -top-[100em]">
            Image Search
          </label>
          <input
            name="uploadImage"
            type="file"
            accept="image/*"
            id="phoneSearchinput"
            className="fixed -top-[100em]"
          />
        </div>
        <label htmlFor="phoneSearch" className="w-0 overflow-hidden">
          Search
        </label>
        <input
          type="text"
          autoComplete="off"
          name="search"
          id="phoneSearch"
          placeholder="Search by keyword"
          className="flex-1 outline-none px-2"
        />
        <div className="bg-black h-[42px] rounded-none rounded-tr-[4px] rounded-br-[4px] p-0 flex items-center justify-center px-3">
          <FaSearch className="text-white" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
