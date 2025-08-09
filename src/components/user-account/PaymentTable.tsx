import React from "react";

const PaymentTable: React.FC = () => {
  const payments = [
    {
      id: "#SP1750860799117",
      date: "25/06/2025 08:13 PM",
      orders: ["SKY131980"],
      amount: "৳1159",
      method: "bkash",
      status: "initiated",
    },
    {
      id: "#SP1750221860633",
      date: "18/06/2025 10:44 AM",
      orders: ["SKY129109"],
      amount: "৳1213",
      method: "bkash",
      status: "initiated",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-md">
      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-5 bg-gray-100 text-sm font-semibold border-b border-gray-200">
        <div className="p-4">Payment ID</div>
        <div className="p-4">Orders</div>
        <div className="p-4">Amount</div>
        <div className="p-4">Method</div>
        <div className="p-4">Status</div>
      </div>

      {/* Responsive Table Rows */}
      {payments.map((payment, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-5 border-b border-gray-200 last:border-b-0 p-4 md:p-0"
        >
          {/* Payment ID */}
          <div className="flex justify-between md:items-center md:p-4 md:pl-6 text-left">
            <span className="md:hidden font-medium text-gray-500">
              Payment ID
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium uppercase text-teal-700 cursor-pointer">
                {payment.id}
              </span>
              <span className="text-xs text-gray-500">{payment.date}</span>
            </div>
          </div>

          {/* Orders */}
          <div className="flex justify-between md:items-center md:p-4 mt-2 md:mt-0 text-left">
            <span className="md:hidden font-medium text-gray-500">Orders</span>
            <div className="flex flex-col gap-2">
              {payment.orders.map((orderId, orderIndex) => (
                <div
                  key={orderIndex}
                  className="flex flex-nowrap items-start whitespace-nowrap"
                >
                  <a
                    href={`/account/order/${orderId}`}
                    className="bg-teal-700 text-white px-2 h-6 flex items-center justify-center rounded text-sm uppercase whitespace-nowrap"
                  >
                    <span>{orderId}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Amount */}
          <div className="flex justify-between md:items-center md:p-4 mt-2 md:mt-0 text-left">
            <span className="md:hidden font-medium text-gray-500">Amount</span>
            <span>{payment.amount}</span>
          </div>

          {/* Method */}
          <div className="flex justify-between md:items-center md:p-4 mt-2 md:mt-0 text-left">
            <span className="md:hidden font-medium text-gray-500">Method</span>
            <div className="flex items-center justify-center">
              <div className="capitalize bg-pink-600 text-white px-2 py-0.5 text-sm rounded-md">
                {payment.method}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex justify-between md:items-center md:p-4 mt-2 md:mt-0 text-left">
            <span className="md:hidden font-medium text-gray-500">Status</span>
            <div className="flex items-center justify-center">
              <div className="capitalize bg-black text-white px-2 py-0.5 text-sm rounded-md">
                {payment.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentTable;
