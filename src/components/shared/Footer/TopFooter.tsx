import React from "react";
import Image from "next/image";
import Link from "next/link";
import tiktokIcon from "@/assets/icons/tiktok.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import youtubeIcon from "@/assets/icons/youtube.svg";
import lnkedinIcon from "@/assets/icons/linkedin.svg";
import logoImg from "@/assets/images/logo-colored.png";

const FooterTop: React.FC = () => {
  // Hardcoded sister company logos data
  const sisterCompanyLogos = [
    {
      href: "/",
      imageSrc: "https://skybuybd.com/_next/static/media/logo.2d8160b9.svg", // SkyBuy Logo
      alt: "SkyBuy Logo",
      label: "sky-buy",
    },
    {
      href: "/",
      imageSrc:
        "https://skybuybd.com/_next/static/media/sky-track.3d4e773f.png",
      alt: "SkyShip Logo",
      label: "sky-track",
      paddingClass: "p-3",
    },
    {
      href: "/",
      imageSrc:
        "https://skybuybd.com/_next/static/media/skyexpress.3f90a79f.svg",
      alt: "SkyExpress Logo",
      label: "sky-express",
      paddingClass: "p-3",
    },
  ];

  return (
    <div className="flex flex-col bg-white mb-4 md:p-4">
      <div className="flex-1">
        <div className="flex flex-col items-center">
          {/* flexColumn align-center */}
          <Image
            src={logoImg.src}
            alt="SkyBuy Logo"
            width={160}
            height={40}
            className="w-40 max-w-[80%] h-[40px] object-cover"
            priority
          />
        </div>
        {/* Social Links Section */}
        <div className="flex mt-4 justify-center  space-x-[0.5rem] ">
          <Link href="#" className="transition duration-400 hover:scale-110">
            <Image
              src={facebookIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="transition duration-400 hover:scale-110">
            <Image
              src={instagramIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">instagram</span>
          </Link>
          <Link href="#" className="transition duration-400 hover:scale-110">
            <Image
              src={youtubeIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">youtube</span>
          </Link>
          s
          <Link href="#" className="transition duration-400 hover:scale-110">
            <Image
              src={tiktokIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">tiktok</span>
          </Link>
          <Link href="#" className="transition duration-400 hover:scale-110">
            <Image
              src={lnkedinIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">linkedin</span>
          </Link>
        </div>
        {/* Company Logos / Sister Brands Section */}
        {/* <div className="flex flex-col items-center justify-center">
          <p className="text-[18px]  md:text-xl mt-4 text-center mb-2 font-semibold">
            Explore Sky Brands... Think to the Sky.
          </p>
          <div className="grid grid-cols-3 gap-4 md:max-w-[600px] w-full md:px-4">
            {sisterCompanyLogos.map((logo, index) => (
              <Link
                key={index}
                href={logo.href}
                target={logo.href.startsWith("/") ? "_self" : "_blank"}
                rel={logo.href.startsWith("/") ? "" : "noopener noreferrer"}
                aria-label={logo.label} // Using the label for aria-label
              >
                <Image
                  src={logo.imageSrc}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  loading="lazy"
                  className="w-full p-2 h-[90px] object-contain rounded bg-[#e8f0f3]
"
                />
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FooterTop;
