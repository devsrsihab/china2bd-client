import PageHeaderWithDate from "@/components/user-account/PageHeaderWithDate";
import PaymentTable from "@/components/user-account/PaymentTable";
import React from "react";

const PaymentPage: React.FC = () => {
  return (
    <div>
      <PageHeaderWithDate title="My Payments" date="9th August, 2025" />
      <PaymentTable />
    </div>
  );
};

export default PaymentPage;
