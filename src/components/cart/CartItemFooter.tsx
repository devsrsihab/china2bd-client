import React from "react";

interface CartItemFooterProps {
  quantity: number;
  totalPrice: number;
}

const CartItemFooter: React.FC<CartItemFooterProps> = ({
  quantity,
  totalPrice,
}) => {
  return (
    <div className="p-3 flex items-center border-t border-gray-200">
      <div className="flex-1 text-sm">Item Details</div>
      <div className="flex-1 ml-2 text-center">
        <span>{quantity} items</span>
      </div>
      <div>
        <span className="text-sm font-medium mr-11">
          ৳{totalPrice.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default CartItemFooter;
