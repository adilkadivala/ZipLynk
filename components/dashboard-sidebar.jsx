// library imports
import Link from "next/link";

// third party imports
import { ChartLine, House, LogOut } from "lucide-react";

const sidebarPages = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <House />,
  },
  {
    href: "/analytics",
    label: "Analytics",
    icon: <ChartLine />,
  },
];

export const DashboardSideBar = () => {
  return (
    <div className="fixed top-14 left-0 border-e border-gray-200 w-[15rem] h-[calc(100vh-3.5rem)] hidden lg:block">
      <div className="relative flex flex-col h-full">
        <div className="flex p-3 flex-col h-full">
          <nav
            className="w-full flex flex-col flex-wrap border-b border-slate-200 h-[75%]"
            data-hs-accordion-always-open
          >
            <ul className="flex flex-col space-y-1">
              {sidebarPages?.map((page) => (
                <li key={page.href}>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg"
                    href={page.href}
                  >
                    {page.icon}
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <footer>
            <ul>
              <li className="mt-5">
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg"
                  href="/"
                >
                  <LogOut />
                  Log-out
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};
