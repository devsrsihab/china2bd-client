"use client";

import { useProductsBySubcategory } from "@/hooks/product.hook";
import CategoryHeader from "../category-header";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton";
import { normalizeProduct } from "@/lib/normalizeProduct";
import { useState } from "react";

function ShopPageSingle({
  categoryId,
  categoryName,
}: {
  categoryId: string;
  categoryName: string;
}) {
  const [page, setPage] = useState(1);

  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useProductsBySubcategory(categoryId, {
    framePosition: page,
    frameSize: 40,
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
      <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
        {isLoading ? (
          Array.from({ length: 40 }).map((_, index) => (
            <div key={index} className="p-1">
              <ProductCardSkeleton isHasSoldQty />
            </div>
          ))
        ) : isError ? (
          <div className="col-span-full text-center text-red-500">
            Failed to load products. Please try again later.
          </div>
        ) : products.length > 0 ? (
          products.map((product: TProduct) => (
            <div key={product.id} className="p-1">
              <ProductCard
                href={`/product/${product.id}`}
                imageSrc={product.thumbnail || "/placeholder.png"}
                imageAlt={product.title}
                productName={product.title}
                productPrice={product?.price?.converted ?? 0}
                isHasSoldQty
                soldQuantity={product.stats.totalSales ?? 0}
                className="shadow-none"
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>

      {/* ✅ Pagination always visible */}
      <div className="flex justify-center mt-6">
        <nav className="flex items-center space-x-1">
          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1 || isLoading}
            className="px-3 py-1 border rounded-md text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNumber = idx + 1;

            // ✅ Show:
            // - first 6 pages
            // - last 2 pages
            // - ellipsis in between
            if (pageNumber <= 6 || pageNumber > totalPages - 2) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  disabled={isLoading}
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

            // Insert ellipsis once between shown ranges
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
            disabled={page === totalPages || isLoading}
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
