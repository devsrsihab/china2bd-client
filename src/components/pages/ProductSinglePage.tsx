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
import ProductTabs from "../ProductTabs";
import ProductImageSection from "../ProductImageSection";

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

// product images
const productImages = [
  "https://global-img-cdn.1688.com/img/ibank/O1CN010Dg5iM1kMuZJojbG3_!!2206518654670-0-cib.600x600.jpg",
  "https://global-img-cdn.1688.com/img/ibank/O1CN01pdrrfS1kMuZMvoYwF_!!2206518654670-0-cib.600x600.jpg",
  "https://global-img-cdn.1688.com/img/ibank/O1CN01qv2AXF1kMuZM6aUql_!!2206518654670-0-cib.600x600.jpg",
  "https://global-img-cdn.1688.com/img/ibank/O1CN01tEb5dJ1kMuZKbh9lA_!!2206518654670-0-cib.600x600.jpg",
  "https://global-img-cdn.1688.com/img/ibank/O1CN01fDdLtb1kMuZM6bRCD_!!2206518654670-0-cib.600x600.jpg",
];

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
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

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
    console.log("selected variant image", variant.imageUrl);

    // setSelectedImage(variant.imageUrl);
    // console.log(
    //   `Selected Variant: ${variant.name} (Image: ${variant.imageUrl}, Index: ${index})`
    // );
    // Here you would typically update your product state or fetch new data based on the selected variant
  };
  return (
    <div>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid lg:grid-cols-[3fr_1fr] gap-3 sm:gap-4">
          {/* LEFT SECTION */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-3 sm:p-4 md:p-6">
              <h2 className="text-base sm:text-lg md:text-[18px] font-bold">
                Cross-border 4748 yards spring white shoes Korean trendy white
                skate shoes casual sneakers fashion versatile casual shoes
              </h2>

              <div className="flex flex-col lg:flex-row rounded-lg gap-4 sm:gap-6 p-2 sm:p-3 md:p-4">
                <div className="w-full lg:w-[45%]">
                  <ProductImageSection
                    setSelectedImage={setSelectedImage}
                    selectedImage={selectedImage}
                    images={productImages}
                  />
                </div>

                <div className="w-full lg:w-[55%]">
                  <CountdownBanner />
                  <div className="grid mb-4">
                    <PriceRangesTab
                      ranges={tieredPrices}
                      activeRangeId={"range-2"}
                    />
                  </div>

                  <ImageVariantSelector
                    variants={productVariantsData}
                    initialSelectedIndex={0}
                    onSelectVariant={handleVariantSelection}
                    setVariantImage={setSelectedImage}
                  />

                  <div className="overflow-x-auto">
                    <ProductSizeTable data={sizeTableData} />
                  </div>

                  <ShippingDetails />

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <SRSButton
                      icon={<MdOutlineShoppingCart />}
                      className="w-full sm:w-auto sm:flex-1"
                      btnText="Add to Cart"
                    />
                    <SRSButton
                      icon={<IoBagCheckOutline />}
                      className="w-full sm:w-auto sm:flex-1"
                      btnText="Buy Now"
                    />
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <ProductInfoAndShare />
                    <ShareAndCopy shareUrl={currentUrl} />
                  </div>
                </div>
              </div>
            </div>

            <ProductTabs />
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-3 sm:space-y-4">
            <div className="px-3 py-3 sm:px-4 sm:py-4 bg-white rounded-lg">
              <h4 className="mb-3 sm:mb-4 border-b border-gray-200 py-2 sm:py-3 font-bold text-sm sm:text-base">
                Women's Crossbody Bags
              </h4>
              <div className="flex">
                <SRSButton className="w-full" btnText="Category Products" />
              </div>
            </div>

            <div className="px-3 py-4 sm:px-4 sm:py-5 bg-white rounded-lg">
              <SellerInfoCard />
            </div>

            <div className="px-3 py-4 sm:px-4 sm:py-5 bg-white rounded-lg">
              <ShippingChargeInfo />
            </div>

            <div className="px-2 py-4 sm:px-3 sm:py-5 bg-white rounded-lg">
              <h4 className="mb-3 sm:mb-4 border-b border-gray-200 py-2 sm:py-3 font-bold text-sm sm:text-base">
                Similar Products
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-2">
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
    </div>
  );
};

export default ProductSinglePage;
