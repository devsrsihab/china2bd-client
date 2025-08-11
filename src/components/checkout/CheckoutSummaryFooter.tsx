"use client";

import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import SRSButton from "../SRSButton";
import InfoModal from "../InfoModal";

interface PaymentSummaryProps {
  payNowAmount: number;
  payLaterAmount: number;
  onApplyCoupon: (couponCode: string) => void;
}
const CheckoutSummaryFooter: React.FC<PaymentSummaryProps> = ({
  payNowAmount = 21371,
  payLaterAmount = 9159,
  onApplyCoupon,
}) => {
  const [couponCode, setCouponCode] = React.useState("");
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Delivery & Courier Charges Checkout",
    items: [
      {
        mainText: "Delivery Charge: ৳710/ ৳1120 Per Kg",
        subText:
          "পণ্য বাংলাদেশে আসার পর পণ্যের ক্যাটাগরীর উপর নির্ভর করে চূড়ান্ত শিপিং চার্জ নির্ধারণ করা হবে।",
        subTextColor: "text-red-600",
      },
      {
        mainText: "China Courier Charge",
      },
    ],
  });
  const handleApplyCoupon = () => {
    onApplyCoupon(couponCode);
  };
  return (
    <>
      <div className="bg-[#e9eff0] rounded p-4 mt-2">
        <div className="flex flex-col items-center justify-center">
          {/* Payment Info */}
          <p className="font-medium mb-1.5 flex items-center">
            <span className="mr-2">70% Payment -</span>
            <span className="text-[16px] font-semibold">
              ৳{payNowAmount.toLocaleString()}
            </span>
          </p>

          {/* Pay on Delivery */}
          <div className="flex items-center justify-center text-[15px]">
            <span className="flex items-center">
              Pay on Delivery
              <span className="font-bold ml-1">
                ৳{payLaterAmount.toLocaleString()}
              </span>
              + Shipping & Courier Charges
              <FiInfo
                onClick={() => setIsInfoModalOpen(true)}
                className="ml-1.5 h-4 w-4 cursor-pointer"
              />
            </span>
          </div>

          {/* Coupon Input */}
          <div className="flex items-center justify-center mt-4 w-full">
            <div className="w-full max-w-[450px]">
              <div className="flex rounded-full overflow-hidden w-full h-10">
                <input
                  type="text"
                  name="coupon"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-4 h-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-l-full"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    paddingLeft: "1rem",
                    borderRight: "none", // Remove right border for seamless connection
                  }}
                />
                <SRSButton
                  btnText="Apply"
                  onClick={handleApplyCoupon}
                  padding="px-6 py-0"
                  radiuse="rounded-r-full"
                  className="h-full rounded-l-none border-l-0"
                  style={{
                    height: "40px",
                    backgroundImage:
                      "linear-gradient(to right, var(--primary-color-dark) 50%, var(--primary-color-light) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* info modal */}
      <InfoModal
        open={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title={modalContent.title}
        content={{ items: modalContent.items }}
      />
    </>
  );
};

export default CheckoutSummaryFooter;
