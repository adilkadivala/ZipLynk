import "@/app/globals.css";
import { DashboardMain } from "@/components/dashboard-main";
import { DashboardNav } from "@/components/dashboard-nav";
import { DashboardSideBar } from "@/components/dashboard-sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col">
        <DashboardNav />
        <div className="flex flex-1 overflow-hidden">
          <DashboardSideBar />
          <DashboardMain>{children}</DashboardMain>
        </div>
      </div>
    </>
  );
}
