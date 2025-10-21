import WalletCards from "../components/dashboard/WalletCards";
import OrderStatusBreakdown from "../components/dashboard/OrderStatusBreakdown";
import TransactionTable from "../components/dashboard/TransactionTable";
import UserInfoCard from "../components/dashboard/UserInfoCard";
import UserHeader from "../components/dashboard/UserHeader";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* ===== User Header Section ===== */}
      <UserHeader />

      {/* ===== Top Cards Section (Wallet + Order Status) ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Wallet Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-3">
          <h1 className="text-xl sm:text-2xl text-[#003F51] font-semibold mb-5">Wallet</h1>

          {/* WalletCards already handles responsive grid */}
          <WalletCards />
        </div>

        {/* Order Status Breakdown */}
        <div className="lg:col-span-1">
          <OrderStatusBreakdown />
        </div>
      </section>

      {/* ===== User Info & Transactions Section ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info */}
        <div className="lg:col-span-1 flex flex-col h-full">
          <UserInfoCard />
        </div>

        {/* Transaction Table */}
        <div className="lg:col-span-2 flex flex-col h-full">
          <TransactionTable />
        </div>
      </section>
    </div>
  );
}
