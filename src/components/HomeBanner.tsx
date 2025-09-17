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
import banner1 from "@/assets/images/banner.webp"; // replace with your own
import miniBanner from "@/assets/images/mini-banner.jpg";
// import bgPattern from "@/assets/images/bg.jpg"; // background pattern like SkyBuy

const heroSlides = [
  {
    img: banner1.src,
    alt: "china2bd-banner-one",
  },
  {
    img: banner1.src,
    alt: "china2bd-banner-two",
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
    <section className="mx-auto w-full px-3 py-3 md:px-4">
      <div className="bannerSection grid grid-cols-1 lg:grid-cols-[1fr_22%] gap-2">
        {/* LEFT: Hero Slider */}
        <div
          className="homeSlider rounded-xl border border-neutral-200 overflow-hidden"
          style={{ transition: "height .15s ease-in" }}
        >
          <Carousel
            className="w-full"
            plugins={[Autoplay({ delay: 9000 })]}
            opts={{ align: "start", loop: true }}
            setApi={setApi}
          >
            <CarouselContent>
              {heroSlides.map((s, i) => (
                <CarouselItem key={i} className="basis-full">
                  <div className="relative w-full aspect-[21/9]">
                    <Image
                      src={s.img}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      priority
                      sizes="100vw"
                      unoptimized
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows */}
            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/60 text-white shadow hover:bg-black/80" />
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/60 text-white shadow hover:bg-black/80" />

            {/* Dots */}
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
          </Carousel>
        </div>

        {/* RIGHT: Banner Promotions */}
        <div className="bannerPromotions flex flex-col gap-2 rounded-xl overflow-hidden border-none">
          {/* First Mini Banner */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-1 rounded-xl overflow-hidden"
          >
            <Image
              src={miniBanner}
              alt="Promo 1"
              fill
              className="object-cover"
              priority
            />
          </a>

          {/* Second Mini Banner */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-1 rounded-xl overflow-hidden"
          >
            <Image
              src={miniBanner}
              alt="Promo 2"
              fill
              className="object-cover"
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
