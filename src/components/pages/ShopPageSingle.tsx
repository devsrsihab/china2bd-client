"use client";

import { useProductsByTitle } from "@/hooks/product.hook";
import CategoryHeader from "../category-header";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton";
import { normalizeProduct } from "@/lib/normalizeProduct";
import { useEffect, useMemo, useState } from "react";
import ProductCardContainerGrid from "../ProductCardContainerGrid";

function ShopPageSingle({ categoryName }: { categoryName: string }) {
  const pageSize = 40;
  const [page, setPage] = useState(1);

  // Reset to first page if category changes
  useEffect(() => setPage(1), [categoryName]);

  // Translate page -> offset expected by API
  const offset = useMemo(() => Math.max(0, (page - 1) * pageSize), [page]);

  const {
    data: productsResponse,
    isLoading,
    isError,
    isFetching,
  } = useProductsByTitle(categoryName, {
    framePosition: offset, // ✅ offset, not page number
    frameSize: pageSize,
  });

  // products + meta
  const products: TProduct[] = (productsResponse?.data || []).map(
    normalizeProduct
  );
  const totalItems = productsResponse?.meta?.total || 0;
  const totalPages = productsResponse?.meta?.totalPages || 1;

  return (
    <div>
      <CategoryHeader name={categoryName} totalItems={totalItems} />

      {/* Products Grid */}
      <ProductCardContainerGrid>
        {isError ? (
          <div className="col-span-full text-center text-red-500">
            Failed to load products. Please try again later.
          </div>
        ) : isLoading || isFetching ? (
          // 👇 Show the pulse skeletons on initial load AND while paginating
          Array.from({ length: pageSize }).map((_, index) => (
            <div key={index} className="p-1">
              <ProductCardSkeleton isHasSoldQty />
            </div>
          ))
        ) : products.length > 0 ? (
          products.map((product: TProduct) => (
            <div key={product?.id} className="p-1">
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
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found in this category.
          </div>
        )}
      </ProductCardContainerGrid>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <nav className="flex items-center space-x-1">
          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1 || isLoading || isFetching}
            className="px-3 py-1 border rounded-md text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNumber = idx + 1;

            // Show first 6, last 2, and an ellipsis between
            if (pageNumber <= 6 || pageNumber > totalPages - 2) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  disabled={isLoading || isFetching}
                  className={`px-3 py-1 border rounded-md text-sm cursor-pointer ${
                    pageNumber === page
                      ? "bg-green-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            }

            if (pageNumber === 7) {
              return (
                <span
                  key="ellipsis"
                  className="px-3 py-1 text-gray-500 select-none"
                >
                  …
                </span>
              );
            }

            return null;
          })}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages || isLoading || isFetching}
            className="px-3 py-1 border rounded-md text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}

export default ShopPageSingle;
