"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const statusOptions = [
  { value: "0", label: "Cancelled" },
  { value: "1", label: "Pending Payment" },
  { value: "1.1", label: "Pending Sea Order Confirmation" },
  { value: "1.2", label: "Confirmed Sea Order - Ready to Payment" },
  { value: "1.5", label: "Waiting for Agent Feedback" },
  { value: "2", label: "Partially Paid" },
  { value: "2.5", label: "Urgent Purchase" },
  { value: "3", label: "Purchasing" },
  { value: "4", label: "Waiting for Customer Response" },
  { value: "5", label: "Pending Supplier Payment" },
  { value: "6", label: "Need Repurchase" },
  { value: "7", label: "Need China Purchase" },
  { value: "7.5", label: "Purchasing - Supplier Confirmed" },
  { value: "7.7", label: "Purchasing - Logistic Confirmed" },
  { value: "7.9", label: "Purchasing - Ready to Payment" },
  { value: "8", label: "Purchase Completed" },
  { value: "9", label: "Ship After Holiday" },
  { value: "10", label: "Shipped from Supplier" },
  { value: "15", label: "Waiting for Warehouse Feedback" },
  { value: "20", label: "Received in China Warehouse" },
  { value: "21", label: "Returned from China Airport" },
  { value: "29", label: "On the way to China Airport" },
  { value: "30", label: "Received in China Airport" },
  { value: "31", label: "Container Loaded" },
  { value: "38", label: "On the way to BD Seaport" },
  { value: "39", label: "On the way to BD Airport" },
  { value: "40", label: "Received in BD Airport" },
  { value: "41", label: "Received in BD Seaport" },
  { value: "49", label: "On the way to BD Warehouse" },
  { value: "50", label: "Received in BD Warehouse" },
  { value: "60", label: "Processing for Delivery" },
  { value: "70", label: "On the way to Delivery" },
  { value: "80", label: "Partial Due" },
  { value: "100", label: "Completed" },
  { value: "101", label: "Processing for Refund" },
  { value: "105", label: "Ready to Refund" },
  { value: "109", label: "Partial Refunded" },
  { value: "110", label: "Refunded" },
];

const OrderFilter: React.FC = () => {
  const [status, setStatus] = React.useState("");
  const [orderId, setOrderId] = React.useState("");

  return (
    <div className="flex justify-between z-50 items-center flex-wrap bg-white border-t-0 border-x border-b border-gray-200 rounded-t-none p-4 gap-4">
      {/* Status Dropdown */}
      <div className="min-w-[300px] bg-white">
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="focus:outline-none focus:ring-0 border border-gray-300 rounded-md px-3 py-2">
            <SelectValue placeholder="Filter By Status" />
          </SelectTrigger>
          <SelectContent className="bg-white shadow-lg z-50">
            {statusOptions.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                className="bg-white hover:bg-gray-100 focus:bg-gray-100"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Search Order ID */}
      <div className="flex w-full md:w-auto">
        <Input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="rounded-r-none focus:outline-none border-none focus:ring-0 focus:border-transparent"
        />
        <Button variant="default" className="rounded-l-none text-white">
          Search
        </Button>
      </div>
    </div>
  );
};

export default OrderFilter;
