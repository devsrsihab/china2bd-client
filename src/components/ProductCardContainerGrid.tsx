import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ProductCardContainerGrid({ children }: Props) {
  return (
    <div
      style={{ maxWidth: "100%" }}
      className="product_card_grid max-w-full py-2 sm:py-4 gap-4"
    >
      {children}
    </div>
  );
}

export default ProductCardContainerGrid;
