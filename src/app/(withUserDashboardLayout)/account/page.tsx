import OrderStats from "@/components/user-account/OrderStats";
import PageHeaderWithDate from "@/components/user-account/PageHeaderWithDate";

function DashboardPage() {
  return (
    <div>
      <PageHeaderWithDate title="Dashboard" date="9th August, 2025" />
      <OrderStats />
    </div>
  );
}

export default DashboardPage;
