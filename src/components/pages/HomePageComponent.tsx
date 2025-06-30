"use client";
import CategoryTabPan from "@/components/category-tab-pan";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/product-card";
import React from "react";
import { useProductList } from "@/hooks/product.hook";
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
  { icon: handbagIcon, tabName: "Bags" },
  { icon: necklaceIcon, tabName: "Jewelry" },
  { icon: shoesIcon, tabName: "Shoes" },
  { icon: beautyProductIcon, tabName: "Beauty Products" },
  { icon: mensClothingIcon, tabName: "Mens Clothing" },
  { icon: clothingIcon, tabName: "Womens Clothing" },
  { icon: childShoeIcon, tabName: "Baby Items" },
  { icon: sunglassIcon, tabName: "Eyewear" },
  { icon: mobileIcon, tabName: "Phone Accessories" },
  { icon: watchIcon, tabName: "Watches" },
  { icon: groceryIcon, tabName: "Groceries" },
  { icon: electronicsIcon, tabName: "Electronics" },
];

const HomePageComponent: React.FC = () => {
  // product list using hook /products/search?keyword=shoe&platform=skybuy
  const { data: productList } = useProductList({
    keyword: "shoe",
    platform: "skybuy",
  });
  console.log("productList", productList?.result?.products);

  return (
    <div className="overflow-hidden">
      {/* 1. Banner with company section */}
      <HomeBanner />

      {/* 2. Product Category Tab Section */}
      <div className="p-4 bg-white overflow-hidden category-tab-container">
        {/* category tabs */}
        <div className="inline-flex overflow-x-scroll scroll-smooth gap-[1.5rem] scrollbar-hide">
          {categories.map((cat, idx) => (
            <CategoryTabPan
              key={idx}
              iconSrc={cat.icon}
              categoryName={cat.tabName}
              isActive={idx === 0}
            />
          ))}
        </div>

        {/* category products/tab content */}
        <div className="[&_.carousel-content]:[scrollbar-width:none] [&_.carousel-content]:[-ms-overflow-style:none]">
          <Carousel
            opts={{}}
            className="w-full overflow-hidden" // This remains correct for the carousel
          >
            <CarouselContent className="[&::-webkit-scrollbar]:hidden carousel-content">
              {productList?.result?.products?.map((product: TProduct) => (
                <CarouselItem key={product.code} className="md:basis-1/6">
                  <div className="p-1">
                    <ProductCard
                      href={`/product/${product.code}`}
                      imageSrc={product.thumbnail.medium}
                      imageAlt={product.title}
                      productName={product.title}
                      productPrice={product.regular_price}
                      isHasSoldQty={false}
                      className="shadow-none"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="srs_prev_btn_cat bg-black absolute left-0 top-0 bottom-0 my-auto z-20 text-white text-[26px] px-[5px]" />
            <CarouselNext className="srs_next_btn_cat bg-black absolute right-0 top-0 bottom-0 my-auto z-50 text-white text-[26px] px-[5px]" />
          </Carousel>
        </div>
      </div>

      {/* category view more */}
      {/* <CategoryBannerViewMore title="SHOES" viewMoreHref="#" /> */}

      {/* 1. Banner with company section */}
      {/* 2. Product Category Tab Section */}
      {/* 3. TRENDING products with horizontal scroll Section */}
      {/* 4. LADIES BAG products Section */}
      {/* 5. JEWELRY Category products Section */}
      {/* 6. SHOES Category products Section */}
      {/* 7. WATCHES Category products Section */}
      {/* 8. SUNGLASS Category products Section */}
      {/* 9. Trending Products with infinite load Section */}
    </div>
  );
};

export default HomePageComponent;
