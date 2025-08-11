"use client";

import React, { useState } from "react";
import EditQuantityModal from "../EditQuantityModal";
import CartVariations from "./CartVariations";
import CartItemHeader from "./CartItemHeader";
import CartItemFooter from "./CartItemFooter";
import CartSummaryFooter from "./CartSummaryFooter";
import ProductPaymentSummary from "../ProductPaymentSummary";

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
  // const handleEditClick = (item: CartItem) => {
  //   setEditingItem(item);
  // };

  // const handleUpdateQuantity = (newQuantity: number) => {
  //   if (editingItem) {
  //     onEditItem({
  //       ...editingItem,
  //       quantity: newQuantity,
  //       totalPrice: newQuantity * editingItem.unitPrice,
  //     });
  //     setEditingItem(null);
  //   }
  // };

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
            <CartItemHeader
              id={item.id}
              imageUrl={item.imageUrl}
              productName={item.productName}
              productUrl={item.productUrl}
              orderId={item.orderId}
              onRemove={onRemoveItem}
            />

            {/* Item Variants */}
            <CartVariations
              variantImageUrl={item.variantImageUrl}
              variantName={item.variantName}
              size={item.size}
              quantity={item.quantity}
              unitPrice={item.unitPrice}
              totalPrice={item.totalPrice}
              onEditClick={() => {
                setEditingItem(item);
                setIsModalOpen(true);
              }}
            />

            {/* Item Footer */}
            <CartItemFooter
              quantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          </div>
        ))}
      </div>

      {/* Cart Summary Section */}
      <ProductPaymentSummary
        summaryFooter={
          <CartSummaryFooter payLaterAmount={summary.payLaterAmount} />
        }
        summaryTitle="Order Summary"
        summary={summary}
        whichFor="cart"
      />

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
