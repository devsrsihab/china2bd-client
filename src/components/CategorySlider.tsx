"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 🟠 category data
import shoeIcon from "@/assets/icons/category/Shoes.png";
import bagIcon from "@/assets/icons/category/bag.png";
import beautyProductIcon from "@/assets/icons/category/Beauty-Products.png";
import jewelryIcon from "@/assets/icons/category/jewelry.png";
import mensClothingIcon from "@/assets/icons/category/Men_s-Clothing.png";
import womanClothesIcon from "@/assets/icons/category/Women_s-clothing.png";
import babyItemIcon from "@/assets/icons/category/Baby-Items.png";
import eyewearIcon from "@/assets/icons/category/Eyewear.png";
import officeSuppliesIcon from "@/assets/icons/category/Office-Supplies.png";
import seasonalProductIcon from "@/assets/icons/category/Seasonal-Products.png";
import phoneAccessoriesIcon from "@/assets/icons/category/Phone-Accessories.png";
import sportIcon from "@/assets/icons/category/Sports-And-Fitness.png";
import entertainmentIcon from "@/assets/icons/category/Entertainment-Items.png";
import watchesIcon from "@/assets/icons/category/Watches.png";
import automobileItemsIcon from "@/assets/icons/category/Automobile-Items.png";
import groceriesIcon from "@/assets/icons/category/Groceries-And-Pets.png";
import outdoorIcon from "@/assets/icons/category/Outdoor-And-Travelling.png";
import electronicsIcon from "@/assets/icons/category/ElectronicsAnd-Gadgets.png";
import kitchenIcon from "@/assets/icons/category/Kitchen-Gadgets.png";
import toolsIcon from "@/assets/icons/category/Tools-Home.png";
import schoolSuppliesIcon from "@/assets/icons/category/School-Supplies.png";
import { makeSlug } from "@/utils/makeSlug";

type CategoryItem = {
  name: string;
  icon: any;
  priceFrom: number;
};

const categories: CategoryItem[] = [
  { name: "Shoes", icon: shoeIcon, priceFrom: 70 },
  { name: "Bag", icon: bagIcon, priceFrom: 50 },
  { name: "Beauty Products", icon: beautyProductIcon, priceFrom: 20 },
  { name: "Jewelry", icon: jewelryIcon, priceFrom: 100 },
  { name: "Men's Clothing", icon: mensClothingIcon, priceFrom: 200 },
  { name: "Women's Clothing", icon: womanClothesIcon, priceFrom: 150 },
  { name: "Baby Items", icon: babyItemIcon, priceFrom: 30 },
  { name: "Eyewear", icon: eyewearIcon, priceFrom: 70 },
  { name: "Office Supplies", icon: officeSuppliesIcon, priceFrom: 35 },
  { name: "Seasonal Products", icon: seasonalProductIcon, priceFrom: 25 },
  { name: "Phone Accessories", icon: phoneAccessoriesIcon, priceFrom: 15 },
  { name: "Sports And Fitness", icon: sportIcon, priceFrom: 40 },
  { name: "Entertainment Items", icon: entertainmentIcon, priceFrom: 60 },
  { name: "Watches", icon: watchesIcon, priceFrom: 90 },
  { name: "Automobile Items", icon: automobileItemsIcon, priceFrom: 300 },
  { name: "Groceries And Pets", icon: groceriesIcon, priceFrom: 10 },
  { name: "Outdoor And Travelling", icon: outdoorIcon, priceFrom: 120 },
  { name: "Electronics And Gadgets", icon: electronicsIcon, priceFrom: 500 },
  { name: "Kitchen Gadgets", icon: kitchenIcon, priceFrom: 45 },
  { name: "Tools & Home", icon: toolsIcon, priceFrom: 80 },
  { name: "School Supplies", icon: schoolSuppliesIcon, priceFrom: 15 },
];

const CategorySlider: React.FC = () => {
  return (
    <section className="py-6">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 mb-4">
        <span className="text-primary">⚡</span> Top Category
      </h2>

      <div className="relative">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 3000, // ⏱ 5 seconds
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {categories.map((cat, i) => (
              <CarouselItem
                key={i}
                className="basis-1/2 sm:basis-1/3 md:basis-1/11 lg:basis-1/11 xl:basis-1/11"
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
                  <p className="mt-2 text-sm font-medium text-gray-800">
                    {cat.name}
                  </p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          {/* <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border rounded-full text-green-500 hover:bg-green-500 hover:text-white" />
          <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border rounded-full text-green-500 hover:bg-green-500 hover:text-white" /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default CategorySlider;
