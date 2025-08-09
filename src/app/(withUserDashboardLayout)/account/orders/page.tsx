import OrderFilter from "@/components/user-account/OrderFilter";
import OrderTable from "@/components/user-account/OrderTable";
import PageHeaderWithDate from "@/components/user-account/PageHeaderWithDate";
import React from "react";

const page: React.FC = () => {
  return (
    <div>
      <PageHeaderWithDate title="Orders" date="9th August, 2025" />
      <OrderFilter />
      <OrderTable />
    </div>
  );
};

export default page;
