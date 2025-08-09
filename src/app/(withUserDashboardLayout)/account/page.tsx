import OrderStats from "@/components/user-account/OrderStats";

function DashboardPage() {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-white">
        <h4 className="font-bold text-[17px] text-gray-800 leading-tight">
          Dashboard
        </h4>
        <p className="font-medium">9th August, 2025</p>
      </div>
      <OrderStats />
    </div>
  );
}

export default DashboardPage;
