"use client";
import React, { useState } from "react";
import CategoryTabPan from "@/components/category-tab-pan";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/product-card";
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
import ProductCardSkeleton from "../ProductCardSkeleton";
import SRSButton from "../SRSButton";

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
  const [selectedKeyword, setSelectedKeyword] = useState<string>("Shoe");

  const { data: productList, isLoading: isProductListLoading } = useProductList(
    {
      keyword: selectedKeyword,
      platform: "skybuy",
    }
  );

  return (
    <div className="overflow-hidden">
      {/* 1. Banner with company section */}
      <HomeBanner />

      {/* 2. Product Category Tab Section */}
      <div className="p-4 bg-white overflow-hidden category-tab-container">
        {/* category tabs */}
        <div className="responsiveOverflow">
          <div className="tab_pane_wrapper inline-flex flex-wrap">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedKeyword(cat.keyword);
                }}
                className="cursor-pointer"
              >
                <CategoryTabPan
                  isActive={selectedKeyword === cat.keyword}
                  iconSrc={cat.icon}
                  categoryName={cat.tabName}
                />
              </div>
            ))}
          </div>
        </div>

        {/* category products/tab content */}
        <div className="tab_content_wrapper">
          <Carousel opts={{}} className="">
            <CarouselContent>
              {isProductListLoading &&
                Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/6">
                    <div className="p-1">
                      <ProductCardSkeleton isHasSoldQty={true} />
                    </div>
                  </CarouselItem>
                ))}
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
            <CarouselPrevious className="srs_prev_btn_cat bg-black absolute left-0 top-0 bottom-0 my-auto z-20 hover:text-white hover:bg-black hover:opacity-100 text-white text-[26px] px-[5px]" />
            <CarouselNext className="srs_next_btn_cat bg-black absolute right-0 top-0 bottom-0 my-auto z-50 hover:text-white hover:bg-black hover:opacity-100 text-white text-[26px] px-[5px]" />
          </Carousel>
        </div>

        {/* view more btn */}
        <div className="flex justify-center mt-4">
          {" "}
          <SRSButton href={`/shop/${selectedKeyword}`} btnText="View More" />
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
