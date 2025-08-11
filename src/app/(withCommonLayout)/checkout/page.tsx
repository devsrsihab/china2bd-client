"use client";

import CheckoutWthForm from "@/components/checkout/CheckoutWthForm";
import PageHeaderWithIcon from "@/components/PageHeaderWithIcon";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

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
// Sample cart items data
const cartItemsArray = [
  {
    id: "6898ffa246cec6e6c0103c8a",
    orderId: "#6898XX",
    productName:
      "[Sheii Su Yinyin] Same Style as Mengling ~ Amiu Genuine Leather Mid-High Western Cowboy Boots Female Knight Boots",
    productUrl: "/product/abb-0289811763880",
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN01UoKHr82EW0qI9lTDq_!!2215645088751-0-cib.600x600.jpg",
    variantImageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN015mswS02EW0qH6GdiV_!!2215645088751-0-cib.600x600.jpg",
    variantName: "Color: Brown long tube",
    size: "Size: 38",
    quantity: 6,
    unitPrice: 1852,
    totalPrice: 11112,
  },
  {
    id: "6898ffbc46cec6e6c0103c8e",
    orderId: "#6898XX",
    productName:
      "Aloe Vera Gel Moisturizing, Moisturizing, After-Sun Repair and Repair Cream Lotion for Men",
    productUrl: "/product/abb-0344599710378",
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN01GNdOGi1CyI3mipTgJ_!!2219493330149-0-cib.600x600.jpg",
    variantImageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN01XcMb8g1CyI3mHFhBW_!!2219493330149-0-cib.600x600.jpg",
    variantName:
      "Product specifications: Skin care aloe vera gel 220g [deep hydration]",
    quantity: 5,
    unitPrice: 870,
    totalPrice: 4350,
  },
];

const checkoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(cartItemsArray);

  // Sample cart summary data
  const cartSummary = {
    productPrice: 15462,
    discountPercentage: 5,
    discountAmount: 773,
    finalPrice: 14689,
    payNowPercentage: 70,
    payNowAmount: 10282,
    payLaterAmount: 4407,
  };

  // Handler functions
  const handleRemoveItem = (id: string) => {
    console.log("Removing item with id:", id);
    // Add your removal logic here
  };

  const handleEditItem = (updatedItem: CartItem) => {
    // Update your cart state here
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
    // Add your checkout logic here
  };

  return (
    <div className="min-h-screen">
      <PageHeaderWithIcon
        variant="icon"
        title="Checkout"
        date="11 August 2025"
        icon={<FiShoppingCart />}
      />

      {/* /CheckoutWthForm */}
      <CheckoutWthForm
        items={cartItems}
        summary={cartSummary}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default checkoutPage;
