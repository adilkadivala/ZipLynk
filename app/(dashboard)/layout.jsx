import "@/app/globals.css";
import { DashboardMain } from "@/components/dashboard-main";
import { DashboardNav } from "@/components/dashboard-nav";
import { DashboardSideBar } from "@/components/dashboard-sidebar";

export default function DashboardLayout({ children, className }) {
  return (
    <>
      <DashboardNav />
      <DashboardSideBar />
      <DashboardMain className="lg:ps-64 pt-5">{children}</DashboardMain>
    </>
  );
}
