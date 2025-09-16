"use client";

import React, { useEffect, useState } from "react";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import SRSButton from "@/components/SRSButton";
import { normalizeProduct } from "@/lib/normalizeProduct";
import { TProduct } from "@/types";
import { usePopularProducts } from "@/hooks/product.hook";

const PAGE_SIZE = 8;

const HomePageComponent: React.FC = () => {
  const [page, setPage] = useState(0); // 0-based page index
  const [displayed, setDisplayed] = useState<TProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);

  // 🔧 send page index; server converts to offset internally
  const {
    data: popularRes,
    error,
    isError,
    isPending,
    isFetching,
    isSuccess,
    refetch,
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

    // Prefer server meta; fallback to count
    const meta = popularRes.meta;
    const moreByMeta =
      meta && typeof meta.totalPages === "number"
        ? meta.page < meta.totalPages - 1 // meta.page should be the page index
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
    <div>
      <HomeBanner />

      <div className="py-4 px-4 sm:px-6 bg-white overflow-hidden mt-4">
        <h2 className="py-3 px-4 text-xl font-bold text-center">
          Trending Products
        </h2>

        {isError && (
          <p className="text-red-600 text-sm mb-3">
            Error: {(error as Error)?.message || "Failed to load"}
          </p>
        )}

        <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
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
        </div>

        {displayed.length > 0 && (
          <div className="flex justify-center mt-4">
            <SRSButton
              onClick={onLoadMore}
              btnText={hasMore ? "Load More" : "No More Items"}
              isLoading={loadingMore}
              disabled={!hasMore || loadingMore}
            />
          </div>
        )}

        {!initialLoading && popularRes?.meta && (
          <p className="text-xs text-gray-500 mt-2 text-center">
            Page {popularRes.meta.page + 1} of{" "}
            {Math.max(1, popularRes.meta.totalPages)} • {popularRes.meta.total}{" "}
            items total
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePageComponent;
