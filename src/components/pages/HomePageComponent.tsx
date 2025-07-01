"use client";
import React, { useState } from "react";
import CategoryTabPan from "@/components/category-tab-pan";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/product-card";
import { useProductList, useTrendingProductList } from "@/hooks/product.hook";
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
import CategoryBannerViewMore from "../CategoryBannerViewMore";

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
  const [trndingCurPage, setTrendingCurPage] = useState<number>(1);
  const [displayedTrendingProducts, setDisplayedTrendingProducts] = useState<
    TProduct[]
  >([]);
  const [hasMoreTrending, setHasMoreTrending] = useState<boolean>(true);

  // product data hook
  const { data: productList, isLoading: isProductListLoading } = useProductList(
    {
      keyword: selectedKeyword,
      platform: "skybuy",
    }
  );

  // ladies bag product list
  const {
    data: ladiesBagProductList,
    isLoading: isLadiesBagPProductListLoading,
  } = useProductList({
    keyword: "ladies bag",
    platform: "skybuy",
  });

  // jewelries bag product list
  const {
    data: jewelriesProductList,
    isLoading: isJewelriesProductListLoading,
  } = useProductList({
    keyword: "jewelries",
    platform: "skybuy",
  });

  // shoes product list
  const { data: shoesProductList, isLoading: isShoesProductListLoading } =
    useProductList({
      keyword: "shoes",
      platform: "skybuy",
    });

  // watches product list
  const { data: watcheProductList, isLoading: isWatcheProductListLoading } =
    useProductList({
      keyword: "watche",
      platform: "skybuy",
    });

  // sunglasses product list
  const {
    data: sunglassesProductList,
    isLoading: isSunglassesProductListLoading,
  } = useProductList({
    keyword: "sunglasses",
    platform: "skybuy",
  });

  // trending product list hook
  const {
    data: trendingProductList,
    isSuccess: isTrendingProductListSuccess,
    isLoading: isTrendingProductListLoading,
  } = useTrendingProductList({
    page: String(trndingCurPage),
    platform: "skybuy",
  });

  // Effect to append new trending products when data arrives
  React.useEffect(() => {
    if (isTrendingProductListSuccess && trendingProductList) {
      setDisplayedTrendingProducts((prevProducts) => [
        ...prevProducts,
        ...(trendingProductList.result || []),
      ]);
      if (
        !trendingProductList.result ||
        trendingProductList.result.length === 0
      ) {
        setHasMoreTrending(false);
      }
    }
  }, [trendingProductList, isTrendingProductListSuccess]);

  const loadMoreTrendingProducts = () => {
    if (hasMoreTrending) {
      setTrendingCurPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Banner with company section */}
      <HomeBanner />

      {/* 2. Product Category Tab Section */}
      <div className="p-4 bg-white overflow-hidden category-tab-container mt-2">
        {/* category tabs */}
        <div className="responsiveOverflow">
          <div className="tab_pane_wrapper ">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedKeyword(cat.keyword);
                }}
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
                  <CarouselItem
                    key={index}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                  >
                    <div className="p-1">
                      <ProductCardSkeleton isHasSoldQty={true} />
                    </div>
                  </CarouselItem>
                ))}
              {productList?.result?.products?.map((product: TProduct) => (
                <CarouselItem
                  key={product.code}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
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

      {/* 3. Product LADIES BAGS category */}
      <div className="py-4 px-4 sm:px-6 bg-white overflow-hidden mt-2">
        {/* category tab content */}
        <CategoryBannerViewMore
          title="Ladies Bags"
          viewMoreHref="/shop/ladies-bags"
        />
        <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {isLadiesBagPProductListLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="p-1">
                <ProductCardSkeleton isHasSoldQty={true} />
              </div>
            ))}
          {ladiesBagProductList?.result?.products
            ?.slice(0, 10)
            ?.map((product: TProduct) => (
              <div key={product.code} className="p-1">
                <ProductCard
                  href={`/product/${product.code}`}
                  imageSrc={product.thumbnail.medium}
                  imageAlt={product.title}
                  productName={product.title}
                  productPrice={product.regular_price}
                  isHasSoldQty={true}
                  soldQuantity={product.meta.total_sold}
                  className="shadow-none"
                />
              </div>
            ))}
        </div>
      </div>

      {/* 4. Product JEWELRIES category */}
      <div className="py-4 px-4 sm:px-6 bg-white overflow-hidden mt-2">
        {/* category tab content */}
        <CategoryBannerViewMore
          title="JEWELRIES"
          viewMoreHref="/shop/jewelries"
        />
        <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {isJewelriesProductListLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="p-1">
                <ProductCardSkeleton isHasSoldQty={true} />
              </div>
            ))}
          {jewelriesProductList?.result?.products
            ?.slice(0, 10)
            ?.map((product: TProduct) => (
              <div key={product.code} className="p-1">
                <ProductCard
                  href={`/product/${product.code}`}
                  imageSrc={product.thumbnail.medium}
                  imageAlt={product.title}
                  productName={product.title}
                  productPrice={product.regular_price}
                  isHasSoldQty={true}
                  soldQuantity={product.meta.total_sold}
                  className="shadow-none"
                />
              </div>
            ))}
        </div>
      </div>

      {/* 5. Product SHOE category */}
      <div className="py-4 px-4 sm:px-6 bg-white overflow-hidden mt-2">
        {/* category tab content */}
        <CategoryBannerViewMore title="SHOES" viewMoreHref="/shop/shoes" />
        <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {isShoesProductListLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="p-1">
                <ProductCardSkeleton isHasSoldQty={true} />
              </div>
            ))}
          {shoesProductList?.result?.products
            ?.slice(0, 10)
            ?.map((product: TProduct) => (
              <div key={product.code} className="p-1">
                <ProductCard
                  href={`/product/${product.code}`}
                  imageSrc={product.thumbnail.medium}
                  imageAlt={product.title}
                  productName={product.title}
                  productPrice={product.regular_price}
                  isHasSoldQty={true}
                  soldQuantity={product.meta.total_sold}
                  className="shadow-none"
                />
              </div>
            ))}
        </div>
      </div>

      {/* 6. Product WATCHE category */}
      <div className="py-4 px-4 sm:px-6 bg-white overflow-hidden mt-2">
        {/* category tab content */}
        <CategoryBannerViewMore title="WATCHE" viewMoreHref="/shop/watche" />
        <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {isWatcheProductListLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="p-1">
                <ProductCardSkeleton isHasSoldQty={true} />
              </div>
            ))}
          {watcheProductList?.result?.products
            ?.slice(0, 10)
            ?.map((product: TProduct) => (
              <div key={product.code} className="p-1">
                <ProductCard
                  href={`/product/${product.code}`}
                  imageSrc={product.thumbnail.medium}
                  imageAlt={product.title}
                  productName={product.title}
                  productPrice={product.regular_price}
                  isHasSoldQty={true}
                  soldQuantity={product.meta.total_sold}
                  className="shadow-none"
                />
              </div>
            ))}
        </div>
      </div>

      {/* 7. Product SUNGLASSES category */}
      <div className="py-4 px-4 sm:px-6 bg-white overflow-hidden mt-2">
        {/* category tab content */}
        <CategoryBannerViewMore
          title="SUNGLASSES"
          viewMoreHref="/shop/sunglasses"
        />
        <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {isSunglassesProductListLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="p-1">
                <ProductCardSkeleton isHasSoldQty={true} />
              </div>
            ))}
          {sunglassesProductList?.result?.products
            ?.slice(0, 10)
            ?.map((product: TProduct) => (
              <div key={product.code} className="p-1">
                <ProductCard
                  href={`/product/${product.code}`}
                  imageSrc={product.thumbnail.medium}
                  imageAlt={product.title}
                  productName={product.title}
                  productPrice={product.regular_price}
                  isHasSoldQty={true}
                  soldQuantity={product.meta.total_sold}
                  className="shadow-none"
                />
              </div>
            ))}
        </div>
      </div>

      {/* 8. Product trending category */}
      <div className="py-4 px-4 sm:px-6 bg-white overflow-hidden mt-4">
        <h2 className="py-3 px-4 text-xl font-bold text-center">
          Trending Products
        </h2>
        <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {displayedTrendingProducts.map((product: TProduct) => (
            <div key={product.code} className="p-1">
              <ProductCard
                href={`/product/${product.code}`}
                imageSrc={product.thumbnail.medium}
                imageAlt={product.title}
                productName={product.title}
                productPrice={product.regular_price}
                isHasSoldQty={true}
                soldQuantity={product.meta.total_sold}
                className="shadow-none"
              />
            </div>
          ))}
          {/* Skeleton loaders for trending products */}
          {!hasMoreTrending &&
            displayedTrendingProducts.length === 0 &&
            Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="p-1">
                <ProductCardSkeleton isHasSoldQty={true} />
              </div>
            ))}
        </div>
        {hasMoreTrending && (
          <div
            onClick={loadMoreTrendingProducts}
            className="flex cursor-pointer justify-center mt-4"
          >
            <SRSButton
              isLoading={isTrendingProductListLoading}
              btnText="Load More"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageComponent;
