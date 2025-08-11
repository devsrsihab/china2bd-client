"use client";

import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import InfoModal from "../InfoModal";

function CartSummaryFooter({ payLaterAmount }: { payLaterAmount: number }) {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Delivery & Courier Charges",
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
  return (
    <>
      <p className="text-lg font-medium mb-1">Pay after delivery</p>
      <p className="flex items-center cursor-pointer">
        ৳ {payLaterAmount.toLocaleString()} + Shipping & Courier Charges
        <FiAlertCircle
          onClick={() => setIsInfoModalOpen(true)}
          className="ml-1.5"
          size={20}
        />
      </p>
      <InfoModal
        open={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title={modalContent.title}
        content={{ items: modalContent.items }}
      />
    </>
  );
}

export default CartSummaryFooter;
