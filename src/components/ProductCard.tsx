import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import placeholderImg from "@/assets/images/Placeholder.png";

interface ProductCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  productName: string;
  productPrice: number;
  soldQuantity?: number;
  isHasSoldQty?: boolean;
  className?: string;
  discountPercentage?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  href,
  imageSrc,
  imageAlt,
  productName,
  productPrice,
  soldQuantity = 0,
  isHasSoldQty = true,
  className = "",
  discountPercentage,
}) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(imageSrc);
  const [loaded, setLoaded] = useState(false);

  return (
    <Card
      className={`${className} flex flex-col items-center relative h-full transition-all duration-400 ease-in-out overflow-hidden cursor-pointer hover:shadow-lg bg-white rounded-md p-0 border border-gray-200`}
    >
      <Link href={href} className="w-full">
        <CardContent className="p-0 flex flex-col items-center">
          {/* Image Container */}
          <div className="prod-image-container relative overflow-hidden rounded-xl w-full h-[230px] bg-white border border-gray-100 mb-1.5">
            {/* Placeholder (visible until main image has loaded) */}
            <Image
              src={placeholderImg}
              alt="placeholder"
              fill
              className={`object-contain p-3 transition-opacity duration-300 ${
                loaded ? "opacity-0" : "opacity-100"
              }`}
              priority={false}
            />

            {/* Main image with fallback on error */}
            <Image
              src={imgSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              loading="lazy"
              unoptimized
              onError={() => {
                if (imgSrc !== placeholderImg) setImgSrc(placeholderImg);
              }}
              onLoad={() => setLoaded(true)}
              sizes="(max-width:768px) 100vw, 100vw"
            />
          </div>

          {/* Product Details */}
          <div className="w-full p-2">
            <span
              className="product-name block text-sm font-medium text-black h-5 overflow-hidden"
              title={productName}
            >
              {productName}
            </span>

            {(!discountPercentage || discountPercentage <= 0) && (
              <div className="flex justify-between items-center mt-2">
                <span className="font-jost product-price block text-[#cf3056] font-bold text-xs sm:text-base">
                  {productPrice}
                </span>
                {isHasSoldQty && (
                  <div>
                    <span className="block text-[10px] sm:text-xs text-gray-700 font-medium">
                      SOLD: {soldQuantity}
                    </span>
                  </div>
                )}
              </div>
            )}

            {discountPercentage && discountPercentage > 0 && (
              <div className="flex items-center mt-2 gap-2.5">
                <span className="text-red-600 font-bold text-base block">
                  ৳{" "}
                  {Math.ceil(
                    productPrice - (productPrice * discountPercentage) / 100
                  )}
                </span>
                <div>
                  <span className="text-gray-500 line-through text-base font-medium mr-2">
                    ৳ {productPrice}
                  </span>
                  <span className="bg-pink-100 text-sm font-medium px-1.5 py-0.5 rounded">
                    {discountPercentage}% Off
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
