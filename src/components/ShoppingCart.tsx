"use client";

import React, { useState } from "react";
import { FiTrash2, FiAlertCircle } from "react-icons/fi";
import Image from "next/image";
import SRSButton from "./SRSButton";
import EditQuantityModal from "./EditQuantityModal";

interface CartItem {
  id: string;
  orderId: string;
  productName: string;
  productUrl: string;
  imageUrl: string;
  variantImageUrl?: string;
  variantName?: string;
  size?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface CartSummary {
  productPrice: number;
  discountPercentage?: number;
  discountAmount?: number;
  finalPrice: number;
  payNowPercentage: number;
  payNowAmount: number;
  payLaterAmount: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  summary: CartSummary;
  onRemoveItem: (id: string) => void;
  onEditItem: (updatedItem: CartItem) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  summary,
  onRemoveItem,
  onEditItem,
  onCheckout,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingItem, setEditingItem] = useState<CartItem | null>(null);
  // This will replace your existing handleEditItem
  const handleEditClick = (item: CartItem) => {
    setEditingItem(item);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    if (editingItem) {
      onEditItem({
        ...editingItem,
        quantity: newQuantity,
        totalPrice: newQuantity * editingItem.unitPrice,
      });
      setEditingItem(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[7fr_4fr] gap-2">
      {/* Cart Items Section */}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded"
          >
            {/* Item Header */}
            <div className="flex items-center p-4 border-b border-gray-100">
              <div className="mt-0.5 mr-3">
                <input type="checkbox" value={item.id} className="scale-110" />
              </div>
              <Image
                src={item.imageUrl}
                alt={item.productName}
                width={64}
                height={64}
                className="w-16 h-16 ml-3"
              />
              <div className="flex-1 ml-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Order ID: {item.orderId}
                  </span>
                </div>
                <a href={item.productUrl} className="block mt-1">
                  <span className="text-sm line-clamp-2">
                    {item.productName}
                  </span>
                </a>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="ml-4 text-red-700 cursor-pointer"
              >
                <FiTrash2 size={24} />
              </button>
            </div>

            {/* Item Variants */}
            <div className="p-3 flex items-center">
              <div className="flex-1 flex items-center">
                {item.variantImageUrl && (
                  <Image
                    src={item.variantImageUrl}
                    alt={item.variantName || ""}
                    width={36}
                    height={36}
                    className="w-9 h-9 mr-2 border border-gray-200"
                  />
                )}
                <div className="flex flex-col">
                  {item.variantName && (
                    <div className="text-sm mb-1">
                      Color: {item.variantName}
                    </div>
                  )}
                  {item.size && (
                    <div className="text-sm">Size: {item.size}</div>
                  )}
                </div>
              </div>
              <div className="flex-1 ml-2">
                <div className="flex items-center">
                  <span className="text-sm mr-1.5">{item.quantity} x</span>
                  <span className="text-sm font-medium">
                    ৳{item.unitPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium mr-3">
                  ৳{item.totalPrice.toLocaleString()}
                </span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs px-2.5 py-0.5 h-5.5 w-10 bg-primary text-white rounded"
                >
                  Edit
                </button>
              </div>
            </div>

            {/* Item Footer */}
            <div className="p-3 flex items-center border-t border-gray-200">
              <div className="flex-1 text-sm">Item Details</div>
              <div className="flex-1 ml-2 text-center">
                <span>{item.quantity} items</span>
              </div>
              <div>
                <span className="text-sm font-medium mr-11">
                  ৳{item.totalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Cart Summary Section */}
      <div className="bg-white border border-gray-200 rounded">
        <div className="p-3 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-center">Cart Summary</h3>
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <p>Product Price</p>
            <span className="font-semibold">
              ৳{summary.productPrice.toLocaleString()}
            </span>
          </div>

          {summary.discountPercentage && summary.discountAmount && (
            <div className="flex justify-between mb-4">
              <p className="flex items-center">
                Super Dhamaka Offer
                <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 font-medium rounded ml-2">
                  {summary.discountPercentage}%
                </span>
              </p>
              <p>
                -{" "}
                <span className="font-semibold">
                  ৳{summary.discountAmount.toLocaleString()}
                </span>
              </p>
            </div>
          )}

          <div className="flex justify-between mb-4">
            <p>Final Price</p>
            <p>
              <span className="font-semibold">
                ৳{summary.finalPrice.toLocaleString()}
              </span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Pay Now ({summary.payNowPercentage}%)</p>
            <span className="font-semibold">
              ৳{summary.payNowAmount.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="bg-blue-50 rounded mx-4 mb-4 p-2 flex flex-col items-center">
          <p className="text-lg font-medium mb-1">Pay after delivery</p>
          <p className="flex items-center cursor-pointer">
            ৳ {summary.payLaterAmount.toLocaleString()} + Shipping & Courier
            Charges
            <FiAlertCircle className="ml-1.5" size={20} />
          </p>
        </div>

        <SRSButton
          onClick={onCheckout}
          className="w-full h-10.5 text-sm font-medium bg-gradient-to-r bg-primary text-white rounded mx-4 mb-4"
          btnText="Go to Checkout"
        />
      </div>

      {/* Edit Quantity Modal */}
      <EditQuantityModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={(qty) => console.log("Update quantity:", qty)}
        onDelete={() => console.log("Item deleted")}
        item={{
          variantName: "Color: Brown long tube",
          size: "Size: 38",
          unitPrice: 1852,
          currentQuantity: 6,
        }}
      />
    </div>
  );
};

export default ShoppingCart;
