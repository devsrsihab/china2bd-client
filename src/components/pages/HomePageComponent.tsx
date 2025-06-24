"use client";
import CategoryTabPan from "@/components/category-tab-pan";
import CompanyCard from "@/components/company-card";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/product-card";
import React from "react";
import CategoryBannerViewMore from "../CategoryBannerViewMore";

const HomePageComponent: React.FC = () => {
  return (
    <div>
      <HomeBanner />
      <div className="grid grid-cols-6 gap-[1.5rem] p-4 bg-white">
        <ProductCard
          href={"/product/1"}
          imageSrc={
            "https://cbu01.alicdn.com/img/ibank/O1CN01Lc6QPS1uWfEnnCUqn_!!2218807776045-0-cib.310x310.jpg"
          }
          imageAlt={"Product 1"}
          productName={"Example Product 1"}
          productPrice={321}
          soldQuantity={12}
          isHasSoldQty={false}
        />
        <ProductCard
          href={"/product/1"}
          imageSrc={
            "https://cbu01.alicdn.com/img/ibank/O1CN01Lc6QPS1uWfEnnCUqn_!!2218807776045-0-cib.310x310.jpg"
          }
          imageAlt={"Product 1"}
          productName={"Example Product 1"}
          productPrice={321}
          soldQuantity={12}
        />
        <ProductCard
          href={"/product/1"}
          imageSrc={
            "https://cbu01.alicdn.com/img/ibank/O1CN01Lc6QPS1uWfEnnCUqn_!!2218807776045-0-cib.310x310.jpg"
          }
          imageAlt={"Product 1"}
          productName={"Example Product 1"}
          productPrice={321}
          soldQuantity={12}
        />
      </div>

      {/* // company card grid  */}
      <div className="grid grid-cols-1 md:grid-cols-4  gap-[1.5rem] p-4 bg-white">
        <CompanyCard
          imageSrc="https://skybuybd.com/_next/static/media/skybuy.6cfce4c7.jpg"
          imageAlt="Company 1"
          btnText="Explore SkyBuy"
          companyName="সকল পাইকারি পণ্যের সমাহার"
          href="/company/1"
        />
        <CompanyCard
          imageSrc="https://skybuybd.com/_next/static/media/skyshop.61d2344c.jpg"
          imageAlt="Company 1"
          btnText="Visit SkyOne"
          companyName="এক পিস কিনতে ভিজিট করুন"
          href="/company/1"
        />
        <CompanyCard
          imageSrc="https://skybuybd.com/_next/static/media/skymall.cd944b30.jpg"
          imageAlt="Company 1"
          btnText="Explore SkyBuy"
          companyName="সকল এক্সক্লুসিভ পণ্যের সমাহার"
          href="/company/1"
        />
        <CompanyCard
          imageSrc="https://skybuybd.com/_next/static/media/skyship.9da8ae15.jpg"
          imageAlt="Company 1"
          btnText="Explore SkyBuy"
          companyName="শিপিং সার্ভিস নিতে ভিজিট করুন"
          href="/company/1"
        />
      </div>

      {/* tab pan */}
      <div className="grid grid-cols-8 gap-[1.5rem] p-4 bg-white">
        <CategoryTabPan
          iconSrc="https://skybuybd.com/_next/static/media/shoes.089eac13.svg"
          categoryName="Shoes"
          isActive={true}
        />
      </div>

      {/* category view more */}
      <CategoryBannerViewMore title="SHOES" viewMoreHref="#" />

      {/* 1. Banner with company section */}
      {/* 2. Product Category Tab Section */}
      {/* 3. TRENDING products with horizontal scroll Section */}
      {/* 4. LADIES BAG products Section */}
      {/* 5. JEWELRY Category products Section */}
      {/* 6. SHOES Category products Section */}
      {/* 7. WATCHES Category products Section */}
      {/* 8. SUNGLASS Category products Section */}
      {/* 9. Trending Products with infinite load Section */}
    </div>
  );
};

export default HomePageComponent;
