import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ProductCardContainerGrid({ children }: Props) {
  return <div className="product_card_grid py-2 sm:py-4 gap-4">{children}</div>;
}

export default ProductCardContainerGrid;
