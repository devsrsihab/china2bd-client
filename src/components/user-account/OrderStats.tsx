import React from "react";

const OrderStats: React.FC = () => {
  return (
    <div>
      <p className="text-xl px-4 pt-4">Order Statistics</p>
      <div className="flex">
        <div className="min-h-[200px] flex-1 mr-2">
          <div className="p-4 flex">
            <div className="bg-gray-200 flex-1 p-4 rounded-md text-center">
              <img
                src="https://skybuybd.com/_next/static/media/pending.f18eb4cc.png"
                alt="Pending"
                className="w-16 mx-auto"
              />
              <h2 className="text-2xl font-bold mt-2">0</h2>
              <p className="text-sm">Pending</p>
            </div>
            <div className="bg-yellow-100 flex-1 p-4 rounded-md text-center mx-4">
              <img
                src="https://skybuybd.com/_next/static/media/processing.15f1b47e.png"
                alt="Processing"
                className="w-16 mx-auto"
              />
              <h2 className="text-2xl font-bold mt-2">0</h2>
              <p className="text-sm">Processing</p>
            </div>
            <div className="bg-green-100 flex-1 p-4 rounded-md text-center">
              <img
                src="https://skybuybd.com/_next/static/media/completed.6cc47d6f.png"
                alt="Completed"
                className="w-16 mx-auto"
              />
              <h2 className="text-2xl font-bold mt-2">0</h2>
              <p className="text-sm">Completed</p>
            </div>
            <div className="bg-red-100 flex-1 p-4 rounded-md text-center ml-4">
              <img
                src="https://skybuybd.com/_next/static/media/cancelled.995eaca8.png"
                alt="Cancelled"
                className="w-16 mx-auto"
              />
              <h2 className="text-2xl font-bold mt-2">2</h2>
              <p className="text-sm">Cancelled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStats;
