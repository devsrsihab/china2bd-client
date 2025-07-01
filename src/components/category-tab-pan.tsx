import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryTabPanProps {
  categoryName: string;
  iconSrc: string;
  isActive?: boolean; // Optional prop to indicate if the tab is active
}

const CategoryTabPan: React.FC<CategoryTabPanProps> = ({
  categoryName,
  iconSrc,
  isActive = false, // Default to false if not provided
}) => {
  return (
    <div className="cursor-pointer ">
      <div
        className={`flex-col md:flex-row  flex items-center justify-center w-full h-auto gap-3 
          px-4 py-2 rounded-xl border 
            ${
              isActive
                ? "bg-[#e8f9ff] border-[#167389]"
                : "bg-[#f5f5f5] border-[#f5f5f5]"
            }
          transition-all duration-200 ease-in-out hover:shadow-md`}
      >
        <Image
          src={iconSrc}
          alt={categoryName}
          className="w-8 h-8 category_tab_pane flex-shrink-0 object-contain"
          width={32}
          height={32}
          loading="lazy"
        />
        <span
          className="
            text-center text-[13px] md:text-sm capitalize font-medium 
            whitespace-nowrap overflow-hidden text-ellipsis
            text-gray-800
          "
        >
          {categoryName}
        </span>
      </div>
    </div>
  );
};

export default CategoryTabPan;
