"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import addImg from "@/assets/icons/add_white.svg";
import removeImg from "@/assets/icons/remove_white.svg";

interface TableRowData {
  size: string;
  currentPrice: string;
  discountPrice: string;
  availableQuantity: number;
  initialQuantity?: number;
}

interface ProductSizeTableProps {
  data: TableRowData[];
  onQuantityChange?: (size: string, newQuantity: number) => void;
  onAddClick?: (size: string) => void;
}

const ProductSizeTable: React.FC<ProductSizeTableProps> = ({
  data,
  onQuantityChange,
  onAddClick,
}) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const [addedItems, setAddedItems] = useState<Set<string>>(() => {
    const initialAdded = new Set<string>();
    data.forEach((row) => {
      if (row.initialQuantity !== undefined && row.initialQuantity > 0) {
        initialAdded.add(row.size);
      }
    });
    return initialAdded;
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleQuantityChange = (size: string, delta: number) => {
    setQuantities((prevQuantities) => {
      const currentQty = prevQuantities[size] || 0;
      const newQty = Math.max(0, currentQty + delta);
      onQuantityChange?.(size, newQty);
      return { ...prevQuantities, [size]: newQty };
    });
  };

  const handleAddButtonClick = (size: string) => {
    setAddedItems((prev) => new Set(prev).add(size));
    setQuantities((prev) => ({ ...prev, [size]: 1 })); // Initialize quantity to 1 when added
    onAddClick?.(size);
    console.log(`Add button clicked for Size: ${size}`);
  };

  const handleScrollMore = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 240, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className="
          overflow-x-auto max-h-[280px]
          border border-gray-200 rounded-md w-full
          scrollbar-hide scroll-smooth
        "
        style={{
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        <table
          id="customers"
          className="border-collapse w-full text-sm font-medium"
        >
          <tbody>
            <tr>
              <th className="py-3 bg-gray-100 text-black border border-gray-200 text-center font-semibold">
                Size
              </th>
              <th className="py-3 bg-gray-100 text-black border border-gray-200 text-center font-semibold">
                Price
              </th>
              <th className="py-3 bg-gray-100 text-black border border-gray-200 text-center font-semibold">
                Quantity
              </th>
            </tr>
            {data.map((row, index) => (
              <tr
                key={row.size}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="w-full border border-gray-200 p-2 text-center font-medium">
                  <span className="break-all">{row.size}</span>
                </td>
                <td className="border border-gray-200 p-2 text-center font-medium">
                  <div className="whitespace-nowrap min-w-[70px] inline-flex flex-col items-center justify-center">
                    <span>{row.currentPrice}</span>
                    <p className="line-through text-gray-500 mr-0 text-xs">
                      {row.discountPrice}
                    </p>
                  </div>
                </td>
                <td className="border border-gray-200 p-2 text-center font-medium">
                  <div className="flex flex-col items-center justify-center">
                    {addedItems.has(row.size) ? (
                      <div className="flex items-center border-primary border-2 rounded-full bg-white relative">
                        <div
                          className="absolute left-[-1px] w-7 h-7 cursor-pointer bg-primary rounded-full p-0.5 flex items-center justify-center"
                          onClick={() => handleQuantityChange(row.size, -1)}
                        >
                          <Image
                            src={removeImg.src}
                            alt="Remove"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                        <input
                          type="text"
                          value={quantities[row.size] || 0}
                          readOnly
                          className="border-none bg-transparent text-center w-20 h-7 mx-2 text-sm focus:outline-none focus:ring-0"
                        />
                        <div
                          className="absolute right-[-1px] w-7 h-7 cursor-pointer bg-primary rounded-full p-0.5 flex items-center justify-center"
                          onClick={() => handleQuantityChange(row.size, 1)}
                        >
                          <Image
                            src={addImg.src}
                            alt="Add"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="w-24 h-7 px-3 border-none rounded-sm bg-primary text-white cursor-pointer flex items-center justify-center text-sm font-medium select-none hover:opacity-90 transition-opacity"
                          onClick={() => handleAddButtonClick(row.size)}
                        >
                          Add
                        </button>
                      </div>
                    )}
                    <div className="mt-0.5">
                      <p className="text-xs font-semibold text-gray-600">
                        {row.availableQuantity}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Scroll More button */}
      <div
        onClick={handleScrollMore}
        className="flex flex-row items-center justify-center py-2 px-0 select-none cursor-pointer"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M112 184l144 144 144-144"
          ></path>
        </svg>
        <span className="text-sm ml-2">Scroll More</span>
      </div>
    </div>
  );
};

export default ProductSizeTable;
