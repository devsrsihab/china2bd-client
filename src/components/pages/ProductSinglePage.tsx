"use client";

import CountdownBanner from "@/components/CountdownBanner";
import ImageVariantSelector from "@/components/ImageVariantSelector";
import PriceRangesTab from "@/components/PriceRangesTab";
import ProductSizeTable from "@/components/ProductSizeTable";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import ShippingDetails from "../ShippingDetails";
import SRSButton from "../SRSButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import ProductInfoAndShare from "../ProductInfoAndShare";
import ShareAndCopy from "../ShareAndCopy";
import SellerInfoCard from "../SellerInfoCard";
import ShippingChargeInfo from "../ShippingChargeInfo";
import ProductCard from "../ProductCard";
import ProductTabs from "../ProductTabs";
import ProductImageSection from "../ProductImageSection";
import CartModal from "../CartModal";
import { useProductById } from "@/hooks/product.hook";
import { Attribute, Picture, Item, DeliveryCost } from "@/types/product.type";

// Table row type for ProductSizeTable
export interface TableRowData {
  size: string;
  currentPrice: string;
  discountPrice: string;
  availableQuantity: number;
  type: "input" | "button";
  initialQuantity?: number;
}

// Variant type for ImageVariantSelector
export interface VariantData {
  imageUrl: string;
  name: string;
}

interface ProductSinglePageProps {
  productId: string;
}

const qtyLimit = 3;

const ProductSinglePage: React.FC<ProductSinglePageProps> = ({ productId }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isQtyEnough, setIsQtyEnough] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<VariantData | null>(
    null
  );
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<
    number | null
  >(null);

  const { data: singleProduct, isLoading } = useProductById(productId, {
    staleTime: 5 * 60 * 1000, // optional: data considered fresh for 5 minutes
  });

  // set current url once
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  /**
   * Memoise the images array so that the reference does not change
   * on every render. Changing this array reference repeatedly can
   * cause downstream components (and effects) to think dependencies
   * have changed, leading to extra renders.
   */
  const imagesForGallery = useMemo(() => {
    console.log("image gallery useeffect run");

    const pics = singleProduct?.data?.Pictures;
    return pics && pics.length > 0
      ? pics.map((p: Picture) => p.Url)
      : ["/placeholder.png"];
  }, [singleProduct?.data?.Pictures]);

  /**
   * Set the default image whenever the Pictures array changes.
   * We avoid adding `selectedImage` to the dependency array because
   * doing so would cause this effect to run again whenever
   * selectedImage changes, potentially leading to a render loop.
   */
  useEffect(() => {
    console.log("effect ran, setting selectedImage");

    if (!singleProduct?.data) return;

    const pics = singleProduct.data.Pictures;
    if (pics && pics.length > 0) {
      const main = pics.find((p: Picture) => p.IsMain)?.Url || pics[0].Url;
      setSelectedImage(main);
    } else {
      setSelectedImage("/placeholder.png");
    }
  }, [productId, singleProduct?.data]);

  console.log("product id", productId);

  // ✅ memoize callback so it’s stable
  const handleVariantSelection = useCallback(
    (variant: VariantData, index: number) => {
      setSelectedVariant(variant);
      setSelectedVariantIndex(index);
      if (variant.imageUrl) setSelectedImage(variant.imageUrl);
    },
    []
  );

  const availableQty = singleProduct?.data?.MasterQuantity ?? 0;

  const handleAddToCart = () => {
    if (availableQty >= qtyLimit) {
      // Example: integrate into cart logic
      setIsQtyEnough(true);
    } else {
      setIsQtyEnough(false);
    }
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!singleProduct?.data) {
    return <div className="p-6">Product not found</div>;
  }

  // 🔹 map product variants (attributes with images)
  const productVariantsData: VariantData[] = useMemo(() => {
    return (
      singleProduct.data.Attributes?.filter((a: Attribute) => a.ImageUrl).map(
        (attr: Attribute) => ({
          imageUrl: attr.ImageUrl!,
          name: attr.Value,
        })
      ) || []
    );
  }, [singleProduct.data.Attributes]);

  // 🔹 map product sizes if available
  const sizeTableData: TableRowData[] =
    singleProduct.data.Attributes?.filter(
      (a: Attribute) =>
        a.PropertyName.toLowerCase() === "size" ||
        a.OriginalPropertyName.toLowerCase() === "size"
    ).map((attr: Attribute) => ({
      size: attr.Value,
      currentPrice: `${singleProduct.data.Price.CurrencySign} ${singleProduct.data.Price.ConvertedPriceWithoutSign}`,
      discountPrice: `${singleProduct.data.Price.CurrencySign} ${singleProduct.data.Price.OriginalPrice}`,
      availableQuantity: singleProduct.data.MasterQuantity,
      type: "button",
    })) || [];

  return (
    <div>
      <div className="px-2 sm:px-4">
        <div className="grid lg:grid-cols-[3fr_1fr] gap-3 sm:gap-4">
          {/* LEFT SECTION */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-3 sm:p-4 md:p-6">
              <h2 className="text-base sm:text-lg md:text-[18px] font-bold">
                {singleProduct.data.Title}
              </h2>

              <div className="flex flex-col lg:flex-row rounded-lg gap-4 sm:gap-6 p-2 sm:p-3 md:p-4">
                <div className="w-full lg:w-[45%]">
                  <ProductImageSection
                    setSelectedImage={setSelectedImage}
                    selectedImage={selectedImage}
                    images={imagesForGallery}
                  />
                </div>

                <div className="w-full lg:w-[55%]">
                  <CountdownBanner />

                  <div className="grid mb-4">
                    <PriceRangesTab
                      ranges={[
                        {
                          id: "range-1",
                          currentPrice: `${singleProduct.data.Price.CurrencySign} ${singleProduct.data.Price.ConvertedPriceWithoutSign}`,
                          previousPrice: `${singleProduct.data.Price.CurrencySign} ${singleProduct.data.Price.OriginalPrice}`,
                          quantityText: `${singleProduct.data.FirstLotQuantity} or more`,
                        },
                      ]}
                      activeRangeId={"range-1"}
                    />
                  </div>

                  {productVariantsData.length > 0 && (
                    <ImageVariantSelector
                      variants={productVariantsData}
                      initialSelectedIndex={0}
                      onSelectVariant={handleVariantSelection}
                      setVariantImage={setSelectedImage}
                    />
                  )}

                  {sizeTableData.length > 0 && (
                    <div className="overflow-x-auto">
                      <ProductSizeTable data={sizeTableData} />
                    </div>
                  )}

                  {/* <ShippingDetails /> */}

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <SRSButton
                      onClick={handleAddToCart}
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

            <CartModal
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              isQtyEnough={isQtyEnough}
              onShopMore={() => setIsDialogOpen(false)}
              onOk={() => setIsDialogOpen(false)}
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-3 sm:space-y-4">
            <div className="px-3 py-3 sm:px-4 sm:py-4 bg-white rounded-lg">
              <h4 className="mb-3 sm:mb-4 border-b border-gray-200 py-2 sm:py-3 font-bold text-sm sm:text-base">
                {singleProduct.data.CategoryId}
              </h4>
              <div className="flex">
                <SRSButton className="w-full" btnText="Category Products" />
              </div>
            </div>

            <div className="px-3 py-4 sm:px-4 sm:py-5 bg-white rounded-lg">
              <SellerInfoCard
                name={singleProduct.data?.VendorDisplayName ?? "Unknown Seller"}
                rating={singleProduct.data?.VendorScore ?? 0}
                storeId={singleProduct.data?.VendorId ?? ""}
                itemsCount={singleProduct.data?.ConfiguredItems?.length ?? 0}
                deliveryScore={4.2}
                serviceScore={3.8}
              />
            </div>

            <div className="px-3 py-4 sm:px-4 sm:py-5 bg-white rounded-lg">
              <ShippingChargeInfo
                charges={
                  singleProduct.data.DeliveryCosts?.map((c: DeliveryCost) => ({
                    area: c.AreaCode,
                    price: `${c.Price.CurrencySign} ${c.Price.ConvertedPriceWithoutSign}`,
                  })) ?? []
                }
              />
            </div>

            <div className="px-2 py-4 sm:px-3 sm:py-5 bg-white rounded-lg">
              <h4 className="mb-3 sm:mb-4 border-b border-gray-200 py-2 sm:py-3 font-bold text-sm sm:text-base">
                Similar Products
              </h4>
              {singleProduct.data.RelatedGroups?.[0]?.Items?.length ? (
                <div className="productList grid [grid-template-columns:repeat(auto-fill,minmax(12rem,1fr))]">
                  {/* {singleProduct.data.RelatedGroups[0].Items.map(
                    (item: Item) => (
                      <div key={item.Title + item.Id} className="p-1">
                        <ProductCard
                          href={`/product/${item.Id}`}
                          imageSrc={item.Image.Url}
                          imageAlt={item.Title}
                          productName={item.Title}
                          productPrice={parseFloat(
                            item.Price.ConvertedPriceWithoutSign
                          )}
                          className="shadow-none border-none"
                          discountPercentage={6}
                        />
                      </div>
                    )
                  )} */}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  No related products found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSinglePage;
