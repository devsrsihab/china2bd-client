import React from "react";

const OrderTable: React.FC = () => {
  const orders = [
    {
      id: "SKY131980",
      itemImage:
        "https://global-img-cdn.1688.com/img/ibank/O1CN013WNF851ebfjXZsefa_!!2216827593890-0-cib.600x600.jpg",
      date: "25/06/2025 08:13 PM",
      total: "৳1656",
      deposit: "৳0",
      due: "৳1656",
      status: "Cancelled",
    },
    {
      id: "SKY129109",
      itemImage:
        "https://global-img-cdn.1688.com/img/ibank/O1CN01TRAt6P1Sg05znYnsi_!!2219376252275-0-cib.600x600.jpg",
      date: "18/06/2025 10:44 AM",
      total: "৳1733",
      deposit: "৳0",
      due: "৳1733",
      status: "Cancelled",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-b-md">
      <div className="hidden md:block">
        <div className="grid grid-cols-8 text-sm font-semibold bg-gray-100 border-b border-gray-200">
          <div className="p-4">Order ID</div>
          <div className="p-4">Item</div>
          <div className="p-4">Date</div>
          <div className="p-4">Total</div>
          <div className="p-4">Deposit</div>
          <div className="p-4">Due</div>
          <div className="p-4">Status</div>
          <div className="p-4">Action</div>
        </div>
      </div>

      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-8 border-b border-gray-200 p-4 md:p-0 last:border-b-0"
        >
          <div className="flex justify-between items-center md:items-start md:p-4">
            <span className="md:hidden font-semibold text-gray-500">ID</span>
            <div className="flex items-center w-full">
              <span className="w-full text-teal-700 cursor-default text-sm uppercase font-medium md:text-left">
                {order.id}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center md:items-start md:p-4 mt-2 md:mt-0">
            <span className="md:hidden font-semibold text-gray-500">Item</span>
            <div className="cursor-pointer">
              <img
                src={order.itemImage}
                alt="Product"
                className="w-10 h-10 object-cover rounded"
              />
            </div>
          </div>
          <div className="flex justify-between items-center md:items-start md:p-4 mt-2 md:mt-0">
            <span className="md:hidden font-semibold text-gray-500">Date</span>
            <span>{order.date}</span>
          </div>
          <div className="flex justify-between items-center md:items-start md:p-4 mt-2 md:mt-0">
            <span className="md:hidden font-semibold text-gray-500">Total</span>
            <span>{order.total}</span>
          </div>
          <div className="flex justify-between items-center md:items-start md:p-4 mt-2 md:mt-0">
            <span className="md:hidden font-semibold text-gray-500">
              Deposit
            </span>
            <span>{order.deposit}</span>
          </div>
          <div className="flex justify-between items-center md:items-start md:p-4 mt-2 md:mt-0">
            <span className="md:hidden font-semibold text-gray-500">Due</span>
            <span>{order.due}</span>
          </div>
          <div className="flex justify-between items-center md:items-start md:p-4 mt-2 md:mt-0">
            <span className="md:hidden font-semibold text-gray-500">
              Status
            </span>
            <div className="flex items-center justify-center">
              <div className="capitalize bg-red-800 text-white px-2 py-1 text-sm rounded-[4px]">
                {order.status}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center md:items-start md:p-4 mt-2 md:mt-0">
            <span className="md:hidden font-semibold text-gray-500">
              Action
            </span>
            <div className="flex">
              <a href={`/account/order/${order.id}`}>
                <button className="h-8 cursor-pointer min-w-[80px] bg-primary text-white rounded-[4px] px-4 py-1 text-sm font-medium hover:primary/90 transition-colors">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderTable;
