import Image from "next/image";
import Link from "next/link";
import React from "react";
import appleStore from "@/assets/images/applestore.png";
import playStore from "@/assets/images/playstore.png";
import FooterTop from "./TopFooter";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-4">
      {/* top footer */}
      <FooterTop />
      <div className=" w-full py-4  md:px-16">
        <div className="grid grid-cols-2 gap-8  md:grid-cols-4">
          <div>
            <h2 className="mb-2 text-[17px] font-bold uppercase ">Contact</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">Mirpur 10 1216 Dhaka, Bangladesh</li>
              <li className="mb-2">Email: info@china2bdpro.com</li>
              <li className="mb-2">Phone: +8801811396279 </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-[17px] font-bold uppercase ">Customer</h2>

            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li>
                <Link href="/" className="hover:underline">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/shipping-charge" className="hover:underline">
                  Shipping Charge
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-[17px] font-bold uppercase ">
              Information
            </h2>

            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/returns-and-refund" className="hover:underline">
                  Returns & Refund
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/secured-payment" className="hover:underline">
                  Secured Payment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Mobile Apps
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  <Image
                    className="w-[120px]"
                    src={playStore}
                    alt="Google Play Store"
                    width={120}
                    height={38}
                    loading="lazy"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  <Image
                    className="w-[120px]"
                    src={appleStore}
                    alt="Apple Store"
                    width={120}
                    height={38}
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://china2bdpro.com/">China2bd</a>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
