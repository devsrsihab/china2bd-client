"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ProductVariant {
  imageUrl: string;
  name: string;
}

interface ImageVariantSelectorProps {
  variants: ProductVariant[];
  initialSelectedIndex?: number;
  onSelectVariant: (variant: ProductVariant, index: number) => void;
  qty?: number;
  setVariantImage: (src: string) => void;
}

const ImageVariantSelector: React.FC<ImageVariantSelectorProps> = ({
  variants,
  initialSelectedIndex = 0,
  onSelectVariant,
  qty,
  setVariantImage,
}) => {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex);
  // set the color name
  const [colorName, setColorName] = useState<string>(
    variants[initialSelectedIndex].name
  );

  useEffect(() => {
    if (variants[initialSelectedIndex]) {
      onSelectVariant(variants[initialSelectedIndex], initialSelectedIndex);
    }
  }, [initialSelectedIndex, onSelectVariant, variants]);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onSelectVariant(variants[index], index);
    setVariantImage(variants[index].imageUrl);
  };

  return (
    <div className="mt-6">
      <h3 className="mb-2 font-semibold text-sm text-gray-700">
        Color : {colorName}
      </h3>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant, index) => (
          <div
            key={index}
            className={` relative border rounded-md p-1 cursor-pointer ${
              selectedIndex === index
                ? "ring-1 ring-[#167389] border-[#167389]"
                : "border-gray-300"
            }`}
            onClick={() => {
              handleClick(index);
              setColorName(variant.name);
            }}
          >
            <Image
              src={variant.imageUrl}
              alt={variant.name}
              width={50}
              height={50}
              className="rounded object-contain"
            />
            {
              // show the quantity if it is greater than 0
              qty && qty > 0 && (
                <div className="absolute top-0 left-0 bg-[linear-gradient(to_top_left,transparent_0,transparent_50%,#167389_50%,#167389_100%)] text-white px-0 py-1 pl-1 text-[12px] h-9 w-9 text-left rounded-tl-[8px] font-bold">
                  {qty}
                </div>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageVariantSelector;
