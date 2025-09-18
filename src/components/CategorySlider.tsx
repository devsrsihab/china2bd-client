"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { categorCarouselItems } from "@/utils/categoryCarousel";
import { makeSlug } from "@/utils/makeSlug";

const CategorySlider: React.FC = () => {
  return (
    <section className="relative w-screen max-w-screen overflow-x-hidden bg-red py-6">
      <h2 className="px-4 text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 mb-4">
        <span className="text-primary">⚡</span> Top Category
      </h2>

      <div className="relative">
        <Carousel
          opts={{ align: "start", loop: false }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
        >
          {/* FIX: remove negative margins and handle spacing via px on children */}
          <CarouselContent className="mx-0 overflow-hidden [&>*]:px-2">
            {categorCarouselItems.map((cat, i) => (
              <CarouselItem
                key={i}
                className="
                  min-w-0 shrink-0
                  basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6
                "
              >
                <Link
                  href={`/shop/${makeSlug(cat.name)}`}
                  className="flex flex-col items-center group"
                >
                  <div className="relative w-28 h-28 rounded-full border-4 border-primary flex items-center justify-center overflow-hidden">
                    <Image
                      src={cat.icon}
                      alt={cat.name}
                      width={80}
                      height={80}
                      className="object-contain w-20 h-20"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-800 text-center">
                    {cat.name}
                  </p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CategorySlider;
