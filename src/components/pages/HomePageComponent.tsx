"use client";
import React, { useState } from "react";
import CategoryTabPan from "@/components/category-tab-pan";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/ProductCard";
import { TProduct } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import shoesIcon from "@/assets/icons/shoes.svg";
import handbagIcon from "@/assets/icons/handbag.svg";
import necklaceIcon from "@/assets/icons/necklace.svg";
import beautyProductIcon from "@/assets/icons/beauty_product.svg";
import mensClothingIcon from "@/assets/icons/mens_clothing.svg";
import clothingIcon from "@/assets/icons/kid.svg";
import childShoeIcon from "@/assets/icons/baby_items.svg";
import sunglassIcon from "@/assets/icons/sunglass.svg";
import mobileIcon from "@/assets/icons/mobile.svg";
import watchIcon from "@/assets/icons/watch.svg";
import groceryIcon from "@/assets/icons/electronics.svg";
import electronicsIcon from "@/assets/icons/electronics.svg";

const categories = [
  { icon: handbagIcon, tabName: "Bags", keyword: "ladies bag" },
  { icon: necklaceIcon, tabName: "Jewelry", keyword: "Jewelry" },
  { icon: shoesIcon, tabName: "Shoes", keyword: "Shoe" },
  {
    icon: beautyProductIcon,
    tabName: "Beauty Products",
    keyword: "beauty-products",
  },
  { icon: mensClothingIcon, tabName: "Mens Clothing", keyword: "clothing men" },
  {
    icon: clothingIcon,
    tabName: "Womens Clothing",
    keyword: "womens-clothing",
  },
  { icon: childShoeIcon, tabName: "Baby Items", keyword: "baby-items" },
  { icon: sunglassIcon, tabName: "Eyewear", keyword: "Eyewear" },
  {
    icon: mobileIcon,
    tabName: "Phone Accessories",
    keyword: "Phone Accessories",
  },
  { icon: watchIcon, tabName: "Watches", keyword: "Watches" },
  { icon: groceryIcon, tabName: "Groceries", keyword: "Groceries" },
  { icon: electronicsIcon, tabName: "Electronics", keyword: "Electronics" },
];

const HomePageComponent: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Banner with company section */}
      <HomeBanner />
    </div>
  );
};

export default HomePageComponent;
