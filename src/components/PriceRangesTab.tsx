import React from "react";

interface PriceRangeItem {
  id: string; // Unique identifier for the range, used to mark as active
  currentPrice: string; // e.g., "৳134.9"
  previousPrice: string; // e.g., "৳ 142"
  quantityText: string; // e.g., "1 or more", "100 or more"
}

interface PriceRangesTabProps {
  ranges: PriceRangeItem[];
  activeRangeId: string; // The ID of the range that should be styled as active
}

const PriceRangesTab: React.FC<PriceRangesTabProps> = ({
  ranges,
  activeRangeId,
}) => {
  return (
    <div
      className="
      mb-2
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      gap-y-2.5 md:gap-y-0 
      gap-x-2.5 
      text-center
    "
    >
      {ranges.map((range) => {
        const isActive = range.id === activeRangeId;
        return (
          <div
            key={range.id}
            className={`
                bg-[#f4f4f4]
              border p-2.5 rounded-lg mb-2.5 md:mb-0 // border:1px solid #eee, padding:10px, border-radius:8px, margin-bottom:10px
              flex flex-col justify-center items-center // Ensure content is centered vertically and horizontally
           ${
             isActive
               ? "bg-gradient-to-r from-[#167389] to-[#167389] text-white" // Directly using the provided color for the gradient
               : "bg-gray-100 border-gray-200" // Default background-color: #f4f4f4, border: 1px solid #eee
           }
              transition-all duration-300 ease-in-out
            `}
          >
            <div className="mb-1.5">
              {" "}
              {/* rangePrice: margin-bottom:5px */}
              <span className="text-[20px] whitespace-nowrap">
                {" "}
                {/* accAmount: font-size:20px, white-space:nowrap */}
                {range.currentPrice}
              </span>
            </div>
            <div className="mb-1.5">
              {" "}
              {/* rangePrice: margin-bottom:5px */}
              <span
                className={`
                  line-through text-gray-500 // prevPrice: text-decoration:line-through, color:rgb(136, 136, 136)
                  ${
                    isActive ? "!text-gray-300" : ""
                  } // rangeActive .prevPrice: color:#ccc!important
                `}
              >
                {range.previousPrice}
              </span>
            </div>
            <div className="text-sm font-medium">
              {" "}
              {/* rangeQty */}
              {range.quantityText}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PriceRangesTab;
