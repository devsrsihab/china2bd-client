import React from "react";
import Image from "next/image";
import a from "next/link";
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
          <a
            href="https://www.facebook.com/china2bdpro"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-400 hover:scale-110"
          >
            <Image
              src={facebookIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/china2bdpro/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-400 hover:scale-110"
          >
            <Image
              src={instagramIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@china2bdpro"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-400 hover:scale-110"
          >
            <Image
              src={youtubeIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">youtube</span>
          </a>

          <a
            href="https://www.tiktok.com/@china2bdpro"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-400 hover:scale-110"
          >
            <Image
              src={tiktokIcon.src}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="sr-only">tiktok</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
