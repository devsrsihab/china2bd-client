"use client";

import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import RightPanel from "./shared/HomeBannerRightPanel";
import banner1 from "@/assets/images/banner.webp";

const heroSlides = [
  {
    img: banner1.src,
    alt: "china2bd-banner-one",
  },
  {
    img: banner1.src,
    alt: "china2bd-banner-one",
  },
];

const HomeBanner: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="mx-auto w-full  px-3 py-3 md:px-4">
      {/* Layout: left hero slider + your right panel */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_340px]">
        {/* LEFT: Skybuy-style hero slider */}
        <div className="w-full">
          <div className="relative">
            <Carousel
              className="w-full"
              plugins={[Autoplay({ delay: 9000 })]}
              opts={{ align: "start", loop: true }}
              setApi={setApi}
            >
              <CarouselContent>
                {heroSlides.map((s, i) => (
                  <CarouselItem key={i} className="basis-full">
                    <Card className="overflow-hidden rounded-2xl border-0 shadow-sm">
                      <CardContent
                        className={`
                          relative w-full p-0 
                          h-[180px] sm:h-[260px] md:h-[440px] 
                          bg-neutral-100
                        `}
                      >
                        <Image
                          src={s.img}
                          alt={s.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width:640px) 100vw,(max-width:1024px) 100vw, 100vw"
                          unoptimized
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows */}
              <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/60 text-white shadow hover:bg-black/80" />
              <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/60 text-white shadow hover:bg-black/80" />
            </Carousel>

            {/* Dots like Skybuy */}
            <div className="pointer-events-auto absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    current === i ? "bg-white" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: keep your existing panel */}
        <RightPanel />
      </div>
    </section>
  );
};

export default HomeBanner;
