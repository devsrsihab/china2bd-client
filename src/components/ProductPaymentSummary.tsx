import React from "react";
import SRSButton from "./SRSButton";

interface ProductPaymentSummaryProps {
  summary: {
    productPrice: number;
    discountPercentage?: number;
    discountAmount?: number;
    finalPrice: number;
    payNowPercentage: number;
    payNowAmount: number;
    payLaterAmount: number;
  };
  summaryTitle: string;
  summaryFooter: React.ReactNode;
  whichFor: "cart" | "checkout";
  checkoutProcessFunction?: () => void;
}

const ProductPaymentSummary: React.FC<ProductPaymentSummaryProps> = ({
  summary,
  summaryTitle,
  summaryFooter,
  whichFor,
  checkoutProcessFunction,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded">
      <div className="p-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-center">{summaryTitle}</h3>
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <p>Product Price</p>
          <span className="font-semibold">
            ৳{summary.productPrice.toLocaleString()}
          </span>
        </div>

        {summary.discountPercentage && summary.discountAmount && (
          <div className="flex justify-between mb-4">
            <p className="flex items-center">
              Super Dhamaka Offer
              <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 font-medium rounded ml-2">
                {summary.discountPercentage}%
              </span>
            </p>
            <p>
              -{" "}
              <span className="font-semibold">
                ৳{summary.discountAmount.toLocaleString()}
              </span>
            </p>
          </div>
        )}

        <div className="flex justify-between mb-4">
          <p>Final Price</p>
          <p>
            <span className="font-semibold">
              ৳{summary.finalPrice.toLocaleString()}
            </span>
          </p>
        </div>

        <div className="flex justify-between">
          <p>Pay Now ({summary.payNowPercentage}%)</p>
          <span className="font-semibold">
            ৳{summary.payNowAmount.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="bg-blue-50 rounded mx-4 mb-4 p-2 flex flex-col items-center">
        {summaryFooter}
      </div>

      {whichFor === "cart" && (
        <SRSButton
          href="/checkout"
          className="w-full h-10.5 text-sm font-medium bg-gradient-to-r bg-primary text-white rounded mx-4 mb-4"
          btnText="Go to Checkout"
        />
      )}
      {whichFor === "checkout" && (
        <SRSButton
          onClick={checkoutProcessFunction}
          className="w-full h-10.5 text-sm font-medium bg-gradient-to-r bg-primary text-white rounded mx-4 mb-4"
          btnText="Go to Checkout"
        />
      )}
    </div>
  );
};

export default ProductPaymentSummary;
