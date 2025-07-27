import { Sidebar, Topbar } from "../components";
import { MarketingDashboard } from "../content";

export const Marketing = () => {
  return (
    <div className="flex h-screen bg-gray-100 text-black">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <MarketingDashboard />
        </main>
      </div>
    </div>
  );
};
