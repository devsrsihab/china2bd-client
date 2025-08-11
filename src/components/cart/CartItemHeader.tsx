"use client";

import React from "react";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";

interface CartItemHeaderProps {
  id: string;
  imageUrl: string;
  productName: string;
  productUrl: string;
  orderId: string;
  onRemove: (id: string) => void;
}

const CartItemHeader: React.FC<CartItemHeaderProps> = ({
  id,
  imageUrl,
  productName,
  productUrl,
  orderId,
  onRemove,
}) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-100">
      {/* Checkbox */}
      <div className="mt-0.5 mr-3">
        <input type="checkbox" value={id} className="scale-110" />
      </div>

      {/* Product Image */}
      <Image
        src={imageUrl}
        alt={productName}
        width={64}
        height={64}
        className="w-16 h-16 ml-3"
      />

      {/* Product Details */}
      <div className="flex-1 ml-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Order ID: {orderId}</span>
        </div>
        <a href={productUrl} className="block mt-1">
          <span className="text-sm line-clamp-2">{productName}</span>
        </a>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(id)}
        className="ml-4 text-red-700 cursor-pointer"
      >
        <FiTrash2 size={24} />
      </button>
    </div>
  );
};

export default CartItemHeader;
