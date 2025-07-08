import Image from "next/image";
import React, { useState } from "react";
import chinaFlag from "@/assets/icons/chinaFlag.svg";
import banglaFlag from "@/assets/icons/banglaFlag.svg";

const ShippingDetails = () => {
  const [selectedMethod, setSelectedMethod] = useState<"air" | "sea">("air");

  const shippingData = {
    air: {
      label: "By air",
      charge: "৳740/ ৳1120 Per Kg",
      details: " ",
    },
    sea: {
      label: "By sea",
      charge: "৳180/ ৳450 Per Kg",
      details:
        "অর্ডার প্লেস করার পর আমাদের একজন প্রতিনিধি আপনার সঙ্গে যোগাযোগ করবেন এবং উক্ত প্রোডাক্টটি সি শিপমেন্টের মাধ্যমে আনা যাবে কি না এবং শিপিং চার্জ কত হবে, সে বিষয়ে নিশ্চিত করবেন। নিশ্চিত হওয়ার আগে কোনো ধরনের পেমেন্ট করা থেকে বিরত থাকুন।",
    },
  };

  return (
    <div>
      <div className="mb-4 rounded">
        <div>
          <h4 className="mb-2 font-bold">Shipping Method</h4>
          <div className="grid grid-cols-2 gap-4">
            {/* By Air */}
            <div
              onClick={() => setSelectedMethod("air")}
              className="bg-blue-100 p-3 rounded cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {selectedMethod === "air" ? (
                    // ✅ Checked SVG
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-cyan-700"
                    >
                      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
                    </svg>
                  ) : (
                    // ❌ Unchecked SVG
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
                    </svg>
                  )}
                  <span className="capitalize">By air</span>
                </div>
              </div>
              <p className="mt-2 text-sm">৳740/ ৳1120 Per Kg</p>
            </div>

            {/* By Sea */}
            <div
              onClick={() => setSelectedMethod("sea")}
              className="bg-blue-100 p-3 rounded cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {selectedMethod === "sea" ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-cyan-700"
                    >
                      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
                    </svg>
                  )}
                  <span className="capitalize">By sea</span>
                </div>
              </div>
              <p className="mt-2 text-sm">৳180/ ৳450 Per Kg</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Info Section */}
      <div className="bg-orange-100 rounded">
        <div className="p-4 rounded">
          <div>
            <p className="text-base mb-1">শিপিং চার্জ</p>
            <p className="text-sm font-semibold">
              {shippingData[selectedMethod].charge}
            </p>
          </div>
          <div className="mt-2 text-sm">
            {shippingData[selectedMethod].details}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md overflow-hidden mt-4">
        <table className="w-full border-collapse text-sm font-medium">
          <tbody>
            <tr className="bg-[#eee] text-black">
              <th className="border border-gray-200 p-2 text-center font-medium">
                <div className="flex items-center w-full">
                  <span>From China</span>
                  <Image
                    src={chinaFlag.src}
                    alt="cn-flag"
                    width={40}
                    height={24}
                    className="ml-4"
                  />
                </div>
              </th>
              <th className="border border-gray-200 p-2 text-center font-medium">
                <div className="flex items-center w-full">
                  <span>To Bangladesh</span>
                  <Image
                    src={banglaFlag.src}
                    alt="bd-flag"
                    width={40}
                    height={24}
                    className="ml-4"
                  />
                </div>
              </th>
            </tr>

            {[
              ["Product Quantity", "0"],
              ["Product Price", "৳0"],
              ["Shipping Charge", shippingData[selectedMethod].charge],
              [
                "Total Cost",
                "৳0 + China Local Courier Charge & Shipping Charge.",
              ],
              ["Pay now (70%)", "৳0"],
              [
                "Pay on Delivery",
                "৳0 + China Local Courier Charge & Shipping Charge.",
              ],
            ].map(([label, value], i) => (
              <tr key={i} className="border-t bg-white hover:bg-[#eee]">
                <td className="border border-gray-200 p-2 font-medium">
                  {label}
                </td>
                <td className="border border-gray-200 p-2 font-medium">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShippingDetails;
