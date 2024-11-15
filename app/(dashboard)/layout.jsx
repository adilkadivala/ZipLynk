import "@/app/globals.css";
import { DashboardMain } from "@/components/dashboard-main";
import { DashboardNav } from "@/components/dashboard-nav";

export default function DashboardLayout({ children, className }) {
  return (
    <>
      <DashboardNav />
      <DashboardMain className="lg:ps-64 pt-5">{children}</DashboardMain>
    </>
  );
}
