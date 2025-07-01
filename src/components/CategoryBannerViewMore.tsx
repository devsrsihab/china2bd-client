import React from "react";
import Link from "next/link"; // For navigation with the button
import SRSButton from "./SRSButton";

interface CategoryBannerViewMoreProps {
  title: string;
  viewMoreHref: string; // "View More" button will always be a navigation link
}

const CategoryBannerViewMore: React.FC<CategoryBannerViewMoreProps> = ({
  title,
  viewMoreHref,
}) => {
  return (
    <div className="flex items-center justify-between">
      <h4 className="font-bold text-[17px] text-gray-800 leading-tight">
        {title}
      </h4>
      <Link href={viewMoreHref} passHref>
        <SRSButton padding="py-3 px-[10px]" btnText={"View More"} />
      </Link>
    </div>
  );
};

export default CategoryBannerViewMore;
