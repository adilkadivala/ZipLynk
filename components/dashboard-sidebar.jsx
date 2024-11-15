import { ChartLine, House, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const DashboardSideBar = () => {
  return (
    <div
      className="absolute inset-y-0 start-0 z-[60]
      border-e border-gray-200 w-[15rem] hidden lg:block"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <div className=" px-6 pt-4 border-b border-slate-200 p-[0.5rem]">
          {/* logo */}
          <Link
            className="flex items-center justify-start gap-4  rounded-xl text-xl font-semibold"
            href="#"
          >
            <Image
              src="logo.svg"
              alt="application-logo"
              width={35}
              height={35}
            />
            <span>ZipLynk</span>
          </Link>
        </div>

        <div className="h-full overflow-y-auto">
          <div className="flex p-3 flex-col h-full">
            <nav
              className=" w-full flex flex-col flex-wrap border-b border-slate-200 h-[75%]"
              data-hs-accordion-always-open
            >
              <ul className="flex flex-col space-y-1">
                {sidebarPages?.map((page) => (
                  <li key={page.href}>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg "
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
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg "
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
    </div>
  );
};

export default DashboardSideBar;
