import React from "react";

const ProductVendorCategory = () => {
  return (
    <div className="rounded-lg mb-4">
      <div>
        <h4 className="mb-2 font-semibold">Shipping Method</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-3 rounded-lg cursor-pointer">
            <div className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="#aaa"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
              </svg>
              <span className="capitalize">By air</span>
            </div>
            <p className="mt-2 text-sm">৳740/ ৳1120 Per Kg</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg cursor-pointer">
            <div className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="#167389"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
              </svg>
              <span className="capitalize">By sea</span>
            </div>
            <p className="mt-2 text-sm">৳180/ ৳450 Per Kg</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-100 p-4 rounded-lg mb-4 mt-4">
        <div>
          <p className="text-base mb-1">শিপিং চার্জ</p>
          <p className="text-sm font-semibold">৳180/ ৳450 Per Kg</p>
        </div>
        <div className="mt-2 text-sm">
          অর্ডার প্লেস করার পর আমাদের একজন প্রতিনিধি আপনার সঙ্গে যোগাযোগ করবেন
          এবং উক্ত প্রোডাক্টটি সি শিপমেন্টের মাধ্যমে আনা যাবে কি না এবং শিপিং
          চার্জ কত হবে, সে বিষয়ে নিশ্চিত করবেন। নিশ্চিত হওয়ার আগে কোনো ধরনের
          পেমেন্ট করা থেকে বিরত থাকুন।
        </div>
      </div>

      <div className="rounded-md overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm font-semibold">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-2 text-left">
                <div className="flex items-center">
                  <span>From China</span>
                  <img
                    src="/_next/static/media/cn.5c61c23a.svg"
                    alt="China Flag"
                    className="h-6 w-10 ml-4"
                  />
                </div>
              </th>
              <th scope="col" className="px-4 py-2 text-left">
                <div className="flex items-center">
                  <span>To Bangladesh</span>
                  <img
                    src="/_next/static/media/bd.c74b0ccc.svg"
                    alt="Bangladesh Flag"
                    className="h-6 w-10 ml-4"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="py-1">
                  <span>Product Quantity </span>
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-left">
                <span>0</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="py-1">
                  <span>Product Price </span>
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-left">
                <span>৳0</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="py-1">
                  <span>Shipping Charge </span>
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-left">
                <span>৳740/ ৳1120 Per Kg</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="py-1">
                  <span>Total Cost</span>
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-left">
                <span>
                  ৳0 + China Local Courier Charge &amp; Shipping Charge.
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="py-1">
                  <span>Pay now (70%)</span>
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-left">
                <span>৳0</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="py-1">
                  <span>Pay on Delivery</span>
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-left">
                <span>
                  ৳0 + China Local Courier Charge &amp; Shipping Charge.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductVendorCategory;
