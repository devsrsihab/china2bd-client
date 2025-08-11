"use client";

import React from "react";
import Image from "next/image";

interface CartVariationsProps {
  variantImageUrl?: string;
  variantName?: string;
  size?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  onEditClick: () => void;
}

const CartVariations: React.FC<CartVariationsProps> = ({
  variantImageUrl,
  variantName,
  size,
  quantity,
  unitPrice,
  totalPrice,
  onEditClick,
}) => {
  return (
    <div className="p-3 flex items-center">
      {/* Variant Info */}
      <div className="flex-1 flex items-center">
        {variantImageUrl && (
          <Image
            src={variantImageUrl}
            alt={variantName || ""}
            width={36}
            height={36}
            className="w-9 h-9 mr-2 border border-gray-200"
          />
        )}
        <div className="flex flex-col">
          {variantName && (
            <div className="text-sm mb-1">Color: {variantName}</div>
          )}
          {size && <div className="text-sm">Size: {size}</div>}
        </div>
      </div>

      {/* Price per unit */}
      <div className="flex-1 ml-2">
        <div className="flex items-center">
          <span className="text-sm mr-1.5">{quantity} x</span>
          <span className="text-sm font-medium">
            ৳{unitPrice.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Total + Edit button */}
      <div className="flex items-center">
        <span className="text-sm font-medium mr-3">
          ৳{totalPrice.toLocaleString()}
        </span>
        <button
          onClick={onEditClick}
          className="text-xs cursor-pointer px-2.5 py-0.5 h-5.5 w-10 bg-primary text-white rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default CartVariations;
