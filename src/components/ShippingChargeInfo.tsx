import React from "react";

export interface ShippingCharge {
  area: string;
  price: string;
  description?: string;
}

interface ShippingChargeInfoProps {
  charges?: ShippingCharge[]; // optional so you can still show static UI
}

const ShippingChargeInfo: React.FC<ShippingChargeInfoProps> = ({ charges }) => {
  if (charges && charges.length > 0) {
    return (
      <div className="flex flex-col gap-0 mt-2 bg-white rounded-md pb-2 min-h-[380px]">
        <div className="border-b border-gray-200 flex items-center justify-center py-3">
          <span className="font-bold">শিপিং চার্জ</span>
        </div>
        {charges.map((c, idx) => (
          <div key={idx} className="bg-white p-3 pb-0">
            <p className="mb-2 font-bold">
              {c.area} - {c.price}
            </p>
            {c.description && <span className="text-sm">{c.description}</span>}
          </div>
        ))}
      </div>
    );
  }

  // 🔹 fallback to your original static UI if no props are passed
  return (
    <div className="flex flex-col gap-0 mt-2 bg-white rounded-md pb-2 min-h-[380px]">
      <div className="border-b border-gray-200 flex items-center justify-center py-3">
        <span className="font-bold">শিপিং চার্জ</span>
      </div>

      <div className="bg-white p-3 pb-0">
        <p className="mb-2 font-bold">ক্যাটাগরিঃ এ - ৭৪০ টাকা প্রতি কেজি</p>
        <span className="text-sm">
          প্রতি কেজি জুতা, ব্যাগ, জুয়েলারী, যন্ত্রপাতি, স্টিকার, ইলেকট্রনিক্স,
          কম্পিউটার এক্সেসরীস, সিরামিক, ধাতব, চামরা, রাবার, প্লাস্টিক জাতীয়
          পণ্য, ব্যাটারি ব্যাতিত খেলনা।
        </span>
      </div>

      <div className="bg-white p-3 pb-0">
        <p className="mb-2 font-bold">ক্যাটাগরিঃ বি - ১১২০ টাকা প্রতি কেজি</p>
        <span className="text-sm">
          ব্যাটারি জাতীয় যেকোন পণ্য, ডুপ্লিকেট ব্র্যান্ড বা কপি পণ্য, জীবন্ত
          উদ্ভিদ, বীজ, রাসায়নিক দ্রব্য, নেটওয়ার্কিং আইটেম, ম্যাগনেট বা লেজার
          জাতীয় পণ্য।
        </span>
      </div>

      <div className="bg-white p-3 pb-0">
        <p className="mb-2 font-bold">ক্যাটাগরিঃ সি</p>
        <span className="text-sm">
          পোশাক/গার্মেন্টস - ৭৮০ টাকা, খাদ্যপণ্য - ১২২০ টাকা, তরল পণ্য /
          কসমেটিক্স - ১১৭০ টাকা, পাওয়ার ব্যাংক - ১৩৫০ টাকা, হিজাব / ওড়না - ৮৫০
          টাকা, পাউডার - ১২২০ টাকা, সানগ্লাস - ৩৫০০ টাকা, সিসি ক্যামেরা - ১৫০০
          টাকা, স্মার্ট ওয়াচ - ১২২০ টাকা, সাধারণ ঘড়ি - ১১২০ টাকা, ব্লুটুথ
          হেডফোন - ১২২০ টাকা।
        </span>
      </div>
    </div>
  );
};

export default ShippingChargeInfo;
