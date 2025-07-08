import React from "react";

const ProductInfoAndShare: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="mb-2">
        <strong>Product Code: </strong>
        <span>abb-0172717005505</span>
      </div>

      <div className="mb-2">
        <strong>Category: </strong>
        <a href="/shop/women-s-crossbody-bags?category=201580619">
          <span className="text-teal-600">Women's Crossbody Bags</span>
        </a>
      </div>

      <div className="mb-2">
        <strong>Approximate Weight: </strong>
        <span>0.01 Kg</span>
      </div>

      <div className="my-2">
        <p className="text-red-600 text-sm font-medium">
          *** উল্লেখিত পণ্যের ওজন সম্পূর্ণ সঠিক নয়, আনুমানিক মাত্র। বাংলাদেশে
          আসার পর পণ্যটির প্রকৃত ওজন মেপে শিপিং চার্জ হিসাব করা হবে।
        </p>
      </div>

      <div className="mb-2">
        <strong>Total Sold: </strong>
        <span>121</span>
      </div>
    </div>
  );
};

export default ProductInfoAndShare;
