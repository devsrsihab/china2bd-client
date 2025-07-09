"use client";
import CountdownBanner from "@/components/CountdownBanner";
import ImageVariantSelector from "@/components/ImageVariantSelector";
import PriceRangesTab from "@/components/PriceRangesTab";
import ProductSizeTable from "@/components/ProductSizeTable";
import React, { useEffect, useState } from "react";
import ShippingDetails from "../ShippingDetails";
import SRSButton from "../SRSButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import ProductInfoAndShare from "../ProductInfoAndShare";
import ShareAndCopy from "../ShareAndCopy";
import SellerInfoCard from "../SellerInfoCard";
import ShippingChargeInfo from "../ShippingChargeInfo";
import { useSimilarProductList } from "@/hooks/product.hook";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard";

const tieredPrices = [
  {
    id: "range-1",
    currentPrice: "৳ 134.9",
    previousPrice: "৳ 142",
    quantityText: "1 or more",
  },
  {
    id: "range-2",
    currentPrice: "৳ 131.1",
    previousPrice: "৳ 138",
    quantityText: "100 or more",
  },
  {
    id: "range-3",
    currentPrice: "৳ 124.45",
    previousPrice: "৳ 131",
    quantityText: "500 or more",
  },
];

// Example data for the product variants with specific names
const productVariantsData: any[] = [
  {
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN0121xvfG2JPCzaFYvQZ_!!2209208799413-0-cib.jpg_100x100q90.jpg",
    name: "BRIGHT BLACK FRAME/GRAY",
  },
  {
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN01QOYXPc2JPCzSMbclp_!!2209208799413-0-cib.jpg_100x100q90.jpg",
    name: "MATTE BLACK FRAME/BLUE",
  },
  {
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN015v2Spz2JPCzWvFjSj_!!2209208799413-0-cib.jpg_100x100q90.jpg",
    name: "GLOSSY WHITE FRAME/BROWN",
  },
  {
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN01JNAanN2JPCzUQiyOW_!!2209208799413-0-cib.jpg_100x100q90.jpg",
    name: "TRANSPARENT FRAME/PURPLE",
  },
  {
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN01ZzlvNP2JPD06DKfR2_!!2209208799413-0-cib.jpg_100x100q90.jpg",
    name: "RED FRAME/CLEAR LENS",
  },
  {
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN01E5O57C2JPCzxC4vc9_!!2209208799413-0-cib.jpg_100x100q90.jpg",
    name: "YELLOW FRAME/GREEN LENS",
  },
  {
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN011vtGhV2JPCzzdIeyx_!!2209208799413-0-cib.jpg_100x100q90.jpg",
    name: "PINK FRAME/LIGHT GRAY",
  },
  {
    imageUrl:
      "https://global-img-cdn.1688.com/img/ibank/O1CN011Kmk8l2JPD04Z7F4t_!!2209208799413-0-cib.jpg_100x100q90.jpg",
    name: "BLUE FRAME/ORANGE LENS",
  },
];
interface TableRowData {
  size: string;
  currentPrice: string;
  discountPrice: string;
  availableQuantity: number;
  type: "input" | "button";
  initialQuantity?: number;
}

// Sample data for the product size table
const sizeTableData: TableRowData[] = [
  {
    size: "34",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 999,
    type: "input",
  },
  {
    size: "35",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 997,
    type: "button",
  },
  {
    size: "36",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 998,
    type: "button",
  },
  {
    size: "37",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 996,
    type: "button",
  },
  {
    size: "38",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 995,
    type: "button",
  },
  {
    size: "39",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 998,
    type: "button",
  },
  {
    size: "40",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 998,
    type: "button",
  },
  {
    size: "41",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 999,
    type: "button",
  },
  {
    size: "42",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 998,
    type: "button",
  },
  {
    size: "43",
    currentPrice: "৳ 1821.15",
    discountPrice: "৳ 1917",
    availableQuantity: 996,
    type: "button",
  },
];

const ProductSinglePage: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<
    number | null
  >(null);

  //similar product list
  const { data: similarProductList, isLoading: isProductListLoading } =
    useSimilarProductList({
      category_id: "1034353",
      platform: "skybuy",
    });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);
  const handleVariantSelection = (variant: any, index: number) => {
    setSelectedVariant(variant);
    setSelectedVariantIndex(index);
    console.log(
      `Selected Variant: ${variant.name} (Image: ${variant.imageUrl}, Index: ${index})`
    );
    // Here you would typically update your product state or fetch new data based on the selected variant
  };
  return (
    <div>
      <div className="grid grid-cols-[3fr_1fr] gap-2">
        {/* product detila section */}
        <div className="max-w-[100%] bg-white over">
          <div className="p-6">
            {/* title */}
            <h2 className="text-[18px] font-bold">
              Cross-border 4748 yards spring white shoes Korean trendy white
              skate shoes casual sneakers fashion versatile casual shoes
            </h2>
            {/* details */}
            <div className="grid grid-cols-[6fr_7fr] rounded-lg gap-8 p-4">
              {/* image section */}
              <div>
                {/* tumbnail */}
                <div className="overflow-hidden max-w-[456px] min-h-[456px]">
                  <div className="cursor-crosshair w-[456px] h-[456px] relative select-none">
                    <img
                      src="https://global-img-cdn.1688.com/img/ibank/O1CN010Dg5iM1kMuZJojbG3_!!2206518654670-0-cib.600x600.jpg"
                      alt="Product Image"
                      className="w-[456px] h-[456px] pointer-events-none max-w-full object-contain"
                    />
                  </div>
                </div>
                {/* photo navigation */}
                <div className="w-full overflow-auto mt-1">
                  <div className="flex flex-row flex-wrap mt-2 items-center">
                    {/* Video Thumbnail */}
                    <div className="relative w-[76px] h-[76px] z-0 mr-2 mb-2">
                      <div className="absolute top-[0.155rem] left-[0.155rem] right-[0.155rem] bottom-[0.155rem] rounded bg-black/35 flex items-center justify-center text-[#e0e0e0] cursor-pointer z-[8]">
                        <img
                          src="/_next/static/media/play.7e02e3b4.svg"
                          alt="Play"
                          className="w-[36px] h-[36px] m-0 p-0"
                        />
                      </div>
                      <img
                        src="https://global-img-cdn.1688.com/img/ibank/O1CN010Dg5iM1kMuZJojbG3_!!2206518654670-0-cib.600x600.jpg"
                        alt="Video Thumbnail"
                        className="relative w-[72px] h-[72px] z-0 p-2 mr-3 mb-3 object-contain"
                      />
                    </div>

                    {/* Sub Images */}
                    {[
                      "https://global-img-cdn.1688.com/img/ibank/O1CN010Dg5iM1kMuZJojbG3_!!2206518654670-0-cib.600x600.jpg",
                      "https://global-img-cdn.1688.com/img/ibank/O1CN01pdrrfS1kMuZMvoYwF_!!2206518654670-0-cib.600x600.jpg",
                      "https://global-img-cdn.1688.com/img/ibank/O1CN01qv2AXF1kMuZM6aUql_!!2206518654670-0-cib.600x600.jpg",
                      "https://global-img-cdn.1688.com/img/ibank/O1CN01tEb5dJ1kMuZKbh9lA_!!2206518654670-0-cib.600x600.jpg",
                      "https://global-img-cdn.1688.com/img/ibank/O1CN01fDdLtb1kMuZM6bRCD_!!2206518654670-0-cib.600x600.jpg",
                    ].map((src, index) => (
                      <div key={index} className="w-[72px] h-[72px] mr-2 mb-2">
                        <img
                          src={src}
                          alt={`Sub Image ${index + 1}`}
                          title="Image"
                          className="w-[46px] h-[46px] p-[0.15rem] object-contain cursor-pointer rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* buttons */}
                <div>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <button className="cursor-pointer mb-4 w-full bg-[#597445] text-white py-2 px-4 rounded">
                      Download Images
                    </button>
                    <button className="cursor-pointer mb-4 w-full bg-[#B43F3F] text-white py-2 px-4 rounded">
                      Original Images
                    </button>
                  </div>
                </div>
              </div>

              {/* details section */}
              <div>
                <CountdownBanner />
                {/* price range */}
                <div className="grid">
                  <PriceRangesTab
                    ranges={tieredPrices}
                    activeRangeId={"range-2"}
                  />
                </div>

                {/* variables */}
                <ImageVariantSelector
                  variants={productVariantsData}
                  initialSelectedIndex={0} // Start with the first variant selected
                  onSelectVariant={handleVariantSelection}
                />
                {/* price and quantity table */}
                <ProductSizeTable data={sizeTableData} />
                {/* shipping details */}
                <ShippingDetails />

                {/* car and bu buttons */}
                <div className="flex gap-2 mt-6">
                  <SRSButton
                    icon={<MdOutlineShoppingCart />}
                    className="flex-1"
                    btnText="Add to Cart"
                  />
                  <SRSButton
                    icon={<IoBagCheckOutline />}
                    className="flex-1"
                    btnText="Buy Now"
                  />
                </div>

                {/* product short info and share */}
                <div>
                  <ProductInfoAndShare />
                  <ShareAndCopy shareUrl={currentUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* vendor accoutn details */}
        <div>
          <div className="px-4 py-3  mb-2 bg-white">
            <h4 className="mb-5 border-b border-gray-200 py-4 font-bold">
              Women's Crossbody Bags
            </h4>

            <div className="flex">
              <SRSButton className="flex-1" btnText="Category Products" />
            </div>
          </div>
          {/* vendor */}
          <div className="px-4 py-6 bg-white mb-2">
            <SellerInfoCard />
          </div>
          {/* shipping charge info */}
          <div className="px-4 py-6 bg-white mb-2">
            <ShippingChargeInfo />
          </div>

          {/* similar product list */}
          <div className="px-2 py-6 bg-white mb-2">
            <h4 className="mb-5 border-b border-gray-200 py-4 font-bold">
              Similar Products
            </h4>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
              {similarProductList?.result?.map((product: TProduct) => (
                <div key={product.code} className="p-1">
                  <ProductCard
                    href={`/product/${product.code}`}
                    imageSrc={product.thumbnail.medium}
                    imageAlt={product.title}
                    productName={product.title}
                    productPrice={product.regular_price}
                    isHasSoldQty={true}
                    soldQuantity={product.meta.total_sold}
                    className="shadow-none border-none"
                    discountPercentage={6}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSinglePage;
