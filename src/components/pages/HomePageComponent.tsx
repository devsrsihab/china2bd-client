"use client";

import React, { useEffect, useState } from "react";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import SRSButton from "@/components/SRSButton";
import { normalizeProduct } from "@/lib/normalizeProduct";
import { TProduct } from "@/types";
import { usePopularProducts } from "@/hooks/product.hook";
import ProductCategorySection from "../ProductCategorySection";
import CategorySlider from "../CategorySlider";
import ProductCardContainerGrid from "../ProductCardContainerGrid";

const PAGE_SIZE = 8;

const HomePageComponent: React.FC = () => {
  const [page, setPage] = useState(0);
  const [displayed, setDisplayed] = useState<TProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const {
    data: popularRes,
    error,
    isError,
    isPending,
    isFetching,
    isSuccess,
  } = usePopularProducts({ framePosition: page, frameSize: PAGE_SIZE });

  useEffect(() => {
    if (!isSuccess || !popularRes) return;

    const raw = (popularRes.data ?? []) as any[];
    const incoming: TProduct[] = raw.map(normalizeProduct);

    setDisplayed((prev) => {
      const seen = new Set(
        prev.map((p: any) => String(p.id ?? p.code ?? p.Id ?? ""))
      );
      const toAdd = incoming.filter((p: any) => {
        const k = String(p.id ?? p.code ?? p.Id ?? "");
        if (!k || seen.has(k)) return false;
        seen.add(k);
        return true;
      });
      return prev.concat(toAdd);
    });

    const meta = popularRes.meta;
    const moreByMeta =
      meta && typeof meta.totalPages === "number"
        ? meta.page < meta.totalPages - 1
        : undefined;

    const moreByCount = incoming.length === PAGE_SIZE;
    setHasMore(moreByMeta ?? moreByCount);
  }, [isSuccess, popularRes]);

  const initialLoading = isPending && displayed.length === 0;
  const loadingMore = isFetching && displayed.length > 0;

  const onLoadMore = () => {
    if (!hasMore || loadingMore) return;
    setPage((p) => p + 1);
  };

  return (
    <div className="w-full">
      {/* ✅ Banner stays full width */}
      <HomeBanner />

      {/* category slider */}
      <CategorySlider />

      {/* Dynamic sections */}
      <ProductCategorySection
        title="Shoes"
        queryTitle="shoes"
        viewMoreHref="/shop/shoes"
      />
      <ProductCategorySection
        title="Mens Clothing"
        queryTitle="mens clothing"
        viewMoreHref="/shop/mens-clothing"
      />
      <ProductCategorySection
        title="Womens Clothing"
        queryTitle="womens clothing"
        viewMoreHref="/shop/womens-clothing"
      />
      <ProductCategorySection
        title="Watches"
        queryTitle="watches"
        viewMoreHref="/shop/watches"
      />

      <section className="w-full  mx-auto  py-6 sm:py-10 bg-white mt-6 rounded-lg shadow-sm">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6">
          Trending Products
        </h2>

        {isError && (
          <p className="text-red-600 text-sm text-center mb-3">
            Error: {(error as Error)?.message || "Failed to load"}
          </p>
        )}

        {/* ✅ Responsive Grid */}
        <ProductCardContainerGrid>
          {initialLoading &&
            Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div key={i} className="p-1">
                <ProductCardSkeleton isHasSoldQty />
              </div>
            ))}

          {displayed.map((product) => {
            const key = String(
              (product as any).id ??
                (product as any).code ??
                (product as any).Id
            );
            return (
              <div key={key} className="p-1">
                <ProductCard
                  href={`/product/${
                    (product as any).id ?? (product as any).code
                  }`}
                  imageSrc={product.thumbnail || "/placeholder.png"}
                  imageAlt={product.title}
                  productName={product.title}
                  productPrice={product?.price?.converted ?? 0}
                  isHasSoldQty
                  soldQuantity={product?.stats?.totalSales ?? 0}
                  className="shadow-none"
                />
              </div>
            );
          })}
        </ProductCardContainerGrid>

        {displayed.length > 0 && (
          <div className="flex justify-center mt-6">
            <SRSButton
              onClick={onLoadMore}
              btnText={hasMore ? "Load More" : "No More Items"}
              isLoading={loadingMore}
              disabled={!hasMore || loadingMore}
            />
          </div>
        )}

        {!initialLoading && popularRes?.meta && (
          <p className="text-xs text-gray-500 mt-4 text-center">
            Page {popularRes.meta.page + 1} of{" "}
            {Math.max(1, popularRes.meta.totalPages)} • {popularRes.meta.total}{" "}
            items total
          </p>
        )}
      </section>
    </div>
  );
};

export default HomePageComponent;
