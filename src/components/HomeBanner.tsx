'"use client";';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const HomeBanner: React.FC = () => {
  const bannerImages = [
    "https://skybuybd.com/_next/static/media/shipping_charge_banner.81212401.jpg",
    "https://skybuybd.com/_next/static/media/banner001.3a675f63.jpg",
    "https://skybuybd.com/_next/static/media/banner001.24edcc28.png",
  ];

  return (
    <div className="grid md:grid-cols-[1fr_28.9%] gap-2">
      <div className=" w-full ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {bannerImages.map((imgSrc, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden p-0 rounded-[12px] border-0">
                    <CardContent className="relative srs_carousel w-full h-[200px] md:h-[470px] p-0">
                      <Image
                        src={imgSrc}
                        alt={`Banner ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 100vw"
                        priority={index === 0}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Position arrows absolutely inside the carousel */}
          <CarouselPrevious className="srs_prev_btn bg-black absolute left-2 top-0 bottom-0 my-auto z-20 text-white text-[26px] px-[5px] transition-all duration-500 opacity-40 hover:opacity-80" />
          <CarouselNext className="srs_next_btn bg-black absolute right-2 top-0 bottom-0 my-auto z-20 text-white text-[26px] px-[5px] transition-all duration-500 opacity-40 hover:opacity-80" />
        </Carousel>
      </div>
      <div className="hidden md:block">
        <Card className="overflow-hidden p-0 rounded-[12px] border-0">
          <CardContent className="relative w-full h-[200px] md:h-[470px] p-0">
            <Image
              src={
                "https://skybuybd.com/_next/static/media/promotion0.baeb4875.png"
              }
              alt={`Banner-small`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeBanner;
