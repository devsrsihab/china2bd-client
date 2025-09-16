"use client";

import React, { useState, MouseEvent } from "react";
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

import SRSButton from "../SRSButton";
import { useProductsByTitle } from "@/hooks/product.hook";
import ProductCardSkeleton from "../ProductCardSkeleton";
import { normalizeProduct } from "@/lib/normalizeProduct";
import { categoryTabs } from "@/utils/categoryTabs";

const HomePageComponent: React.FC = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>("Shoe");

  const {
    data: productList,
    isLoading: isProductListLoading,
    isError,
    isFetching,
  } = useProductsByTitle(selectedKeyword, {
    framePosition: 0,
    frameSize: 40,
  });

  const rawProducts: TProduct[] =
    ((productList as any)?.data as TProduct[]) ??
    ((productList as any)?.result?.products as TProduct[]) ??
    [];

  const normalizeData: TProduct[] = (rawProducts || []).map(normalizeProduct);

  const onTabClick = (e: MouseEvent<HTMLButtonElement>, keyword: string) => {
    setSelectedKeyword(keyword);
    (e.currentTarget as HTMLButtonElement).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  };

  return (
    <div>
      {/* 1) Banner */}
      <HomeBanner />

      {/* 2) Category Tabs */}
      <div className="p-4 bg-white mt-2">
        {/* Tabs row with its own scrollbar */}
        <div className="relative w-full overflow-x-auto overflow-y-hidden scroll-smooth [-webkit-overflow-scrolling:touch]">
          <div className="flex w-max flex-nowrap whitespace-nowrap gap-2 sm:gap-3 md:gap-4 py-1 pr-6">
            {categoryTabs.map((cat) => {
              const active = selectedKeyword === cat.keyword;
              return (
                <button
                  key={cat.keyword}
                  type="button"
                  onClick={(e) => onTabClick(e, cat.keyword)}
                  className="flex-none"
                  aria-pressed={active}
                  aria-label={`Category ${cat.tabName}`}
                >
                  <CategoryTabPan
                    isActive={active}
                    iconSrc={cat.icon.src}
                    categoryName={cat.tabName}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* 3) Products */}
        <div className="mt-2">
          <Carousel>
            <CarouselContent>
              {(isProductListLoading || isFetching) &&
                Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem
                    key={`skeleton-${index}`}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                  >
                    <div className="p-1">
                      <ProductCardSkeleton isHasSoldQty />
                    </div>
                  </CarouselItem>
                ))}

              {!isProductListLoading &&
                !isError &&
                !isFetching &&
                normalizeData.map((product: TProduct) => (
                  <CarouselItem
                    key={product.id}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                  >
                    <div className="p-1">
                      <ProductCard
                        href={`/product/${product?.id}`}
                        imageSrc={product?.thumbnail || "/placeholder.png"}
                        imageAlt={product?.title}
                        productName={product?.title}
                        productPrice={product?.price?.converted ?? 0}
                        isHasSoldQty
                        soldQuantity={product.stats?.totalSales ?? 0}
                        className="shadow-none"
                      />
                    </div>
                  </CarouselItem>
                ))}

              {isError && !isProductListLoading && !isFetching && (
                <div className="p-4 text-center text-red-500">
                  Failed to load products.
                </div>
              )}
            </CarouselContent>

            <CarouselPrevious className="srs_prev_btn_cat bg-black absolute left-0 top-0 bottom-0 my-auto z-20 text-white text-[26px] px-[5px]" />
            <CarouselNext className="srs_next_btn_cat bg-black absolute right-0 top-0 bottom-0 my-auto z-50 text-white text-[26px] px-[5px]" />
          </Carousel>
        </div>

        {/* 4) View more */}
        <div className="flex justify-center mt-4">
          <SRSButton
            href={`/shop/${encodeURIComponent(selectedKeyword)}`}
            btnText="View More"
          />
        </div>
      </div>

      {/* Scoped scrollbar styling */}
      <style jsx global>{`
        .overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.25);
          border-radius: 9999px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default HomePageComponent;
