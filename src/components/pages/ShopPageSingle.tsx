"use client";

import { useProductsBySubcategory } from "@/hooks/product.hook";
import CategoryHeader from "../category-header";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton";
import { normalizeProduct } from "@/lib/normalizeProduct";

function ShopPageSingle({
  categoryId,
  categoryName,
}: {
  categoryId: string;
  categoryName: string;
}) {
  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useProductsBySubcategory(categoryId, { framePosition: 1, frameSize: 40 });

  // 🔄 Normalize raw response
  const products: TProduct[] = (productsResponse?.data || []).map(
    normalizeProduct
  );
  console.log("products", products);
  const totalItems = productsResponse?.meta?.total || 0;

  if (isLoading) {
    return (
      <div>
        <CategoryHeader name={categoryName} totalItems={0} />
        <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="p-1">
              <ProductCardSkeleton isHasSoldQty />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">
        Failed to load products. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <CategoryHeader name={categoryName} totalItems={totalItems} />
      <div className="grid p-2 sm:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
        {products.length > 0 ? (
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
    </div>
  );
}

export default ShopPageSingle;
