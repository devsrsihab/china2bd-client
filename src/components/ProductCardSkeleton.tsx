import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Shadcn Skeleton import
import { Card, CardContent } from "@/components/ui/card";

const ProductCardSkeleton: React.FC<{ isHasSoldQty?: boolean }> = ({
  isHasSoldQty = true,
}) => {
  return (
    <Card className="flex flex-col items-center relative h-full overflow-hidden bg-white rounded-md p-0 border border-gray-200">
      <CardContent className="p-0 flex flex-col items-center w-full">
        {/* Image Skeleton */}
        <div className="w-full">
          <Skeleton className="w-full h-[230px] rounded-xl bg-gray-300 mb-1.5 animate-pulse" />
        </div>

        {/* Product Details Skeleton */}
        <div className="w-full p-2">
          {/* Product Name */}
          <Skeleton className="h-4 w-3/4 mb-3 bg-gray-300 animate-pulse" />

          <div className="flex justify-between items-center mt-2">
            {/* Price */}
            <Skeleton className="h-5 w-12 bg-gray-300 animate-pulse" />

            {/* Sold Quantity (conditionally shown) */}
            {isHasSoldQty && (
              <div>
                <Skeleton className="h-3 w-16 bg-gray-300 animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
