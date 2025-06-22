import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type CategoryHeaderProps = {
  name: string;
  totalItems: number;
};

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  name,
  totalItems,
}) => {
  return (
    <div className="bg-white w-full border border-gray-200 rounded-md mb-2 md:mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        {/* left side */}
        <div className="flex  items-center mb-2 md:mb-0">
          <div className="flex flex-wrap items-center overflow-hidden">
            <b className="mr-2 text-sm">
              SHOWING{" "}
              <b className="underline mx-0.5 text-sm">
                {totalItems ? totalItems : 0}{" "}
              </b>
              RESULTS FOR
            </b>
            <b className="text-[#94700b] uppercase break-all text-sm">
              {name ? name : "No Category"}{" "}
            </b>
          </div>
        </div>

        {/* right side */}
        <div className="flex  w-full md:w-[auto]  items-center ml-0 md:ml-2 space-y-2 md:space-y-0 md:space-x-2">
          <Input
            type="text"
            placeholder="Min Price"
            className="w-full focus-visible:ring-1 focus-visible:border-primary md:w-24 border-[1px] border-[#ddd] rounded-[4px] h-9 text-sm"
          />
          <span className="px-2  md:block">-</span>
          <Input
            type="text"
            placeholder="Max Price"
            className="w-full focus-visible:ring-1 focus-visible:border-primary md:w-24 border-[1px] border-[#ddd] rounded-[4px] h-9 text-sm"
          />
          <Button
            className="h-9 px-6 text-white rounded-sm flex items-center justify-center
                       bg-gradient-to-r from-primary to-primary/90 cursor-pointer text-sm font-medium
                       hover:from-primary hover:to-primary/80 transition-all duration-500 ease-in-out"
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
