"use client";

import React from "react";
import { useProductsByTitle } from "@/hooks/product.hook";
import { normalizeProduct } from "@/lib/normalizeProduct";
import { TProduct } from "@/types";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import CategoryBannerViewMore from "@/components/CategoryBannerViewMore";
import ProductCardContainerGrid from "./ProductCardContainerGrid";

interface ProductSectionProps {
  title: string; // UI title (e.g. "Shoes")
  queryTitle: string | number; // API title param
  viewMoreHref: string; // link to "view more"
  limit?: number; // how many products to show (default 10)
}

const ProductCategorySection: React.FC<ProductSectionProps> = ({
  title,
  queryTitle,
  viewMoreHref,
  limit = 12,
}) => {
  const {
    data: res,
    isPending,
    isSuccess,
  } = useProductsByTitle(queryTitle, { framePosition: 0, frameSize: limit });

  const products: TProduct[] = React.useMemo(() => {
    if (!isSuccess || !res) return [];
    const raw = (res.data ?? []) as any[];
    return raw.map(normalizeProduct).slice(0, limit);
  }, [res, isSuccess, limit]);

  return (
    <div className="py-4 px-4 sm:px-6 bg-white overflow-hidden mt-2">
      {/* Section header with "View More" */}
      <CategoryBannerViewMore title={title} viewMoreHref={viewMoreHref} />

      {/* Product Grid */}
      <ProductCardContainerGrid>
        {isPending &&
          Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="p-1">
              <ProductCardSkeleton isHasSoldQty />
            </div>
          ))}

        {products.map((product) => {
          const key = String(product.id);
          return (
            <div key={key} className="p-1">
              <ProductCard
                href={`/product/${product.id ?? product.id}`}
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
    </div>
  );
};

export default ProductCategorySection;
