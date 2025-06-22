import React from "react";
import Link from "next/link"; // Assuming you are using Next.js for routing
import { Card, CardContent } from "@/components/ui/card"; // Assuming your Shadcn Card component path

interface ProductCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  productName: string;
  productPrice: number;
  soldQuantity: number;
  isHasSoldQty?: boolean; // Optional prop to control sold quantity display
}

const ProductCard: React.FC<ProductCardProps> = ({
  href,
  imageSrc,
  imageAlt,
  productName,
  productPrice,
  soldQuantity,
  isHasSoldQty = true, // Default to true if not provided
}) => {
  return (
    // The main card container
    <Card className="flex flex-col items-center relative h-full transition-all duration-400 ease-in-out overflow-hidden cursor-pointer hover:shadow-lg bg-white rounded-md p-0 border border-gray-200">
      <Link href={href} className="w-full">
        {/* CardContent holds the actual product details */}
        <CardContent className="p-0 flex flex-col items-center">
          {/* Image Container */}
          <div className="prod-image-container overflow-hidden rounded-2xl w-full">
            <img
              className="product-image w-full  h-[230px] object-cover object-center bg-white rounded-xl border border-gray-100 mb-1.5 transition-all duration-200 ease-in-out"
              src={imageSrc}
              loading="lazy"
              alt={imageAlt}
            />
          </div>
          {/* Product Details (Name, Price, Sold) */}
          <div className="w-full p-2">
            <span
              className="product-name block text-sm font-medium text-black h-5 overflow-hidden"
              title={productName}
            >
              {productName}
            </span>
            <div className="flex justify-between items-center mt-2">
              <span className="product-price block text-[#cf3056] font-bold text-base">
                {productPrice}
              </span>
              {isHasSoldQty && (
                <div>
                  <span className="block text-xs text-gray-700 font-medium">
                    SOLD: {soldQuantity}
                  </span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
