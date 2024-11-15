import Image from "next/image";
import Link from "next/link";

// third-party imports
import { ChevronRight, PanelRightOpen, Search, User } from "lucide-react";

// components imports
import DashboardSideBar from "@/components/dashboard-sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const DashboardNav = () => {
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 lg:me-0 lg:hidden">
            {/* <!-- Logo --> */}
            <Link
              className="flex items-center justify-center gap-5 rounded-xl text-xl font-semibold"
              href="/"
            >
              <Image
                src="logo.svg"
                alt="application-logo"
                width={35}
                height={35}
              />
            </Link>
            {/* <!-- End Logo --> */}
          </div>

          <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
            <div className="hidden md:block">
              {/* <!-- Search Input --> */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <Search size={15} />
                </div>
                <Input
                  type="text"
                  className="py-2 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-1">
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <Button
                  type="button"
                  className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full"
                >
                  {/* <Image
                    className="shrink-0 size-[38px] rounded-full"
                    alt="Avatar"
                    src="/"
                    width={20}
                    height={20}
                  /> */}
                  <User />
                </Button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60">
                  <div className="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Signed in as
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                      james@site.com
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Dropdown --> */}
            </div>
          </div>
        </nav>
      </header>
      <DashboardSideBar />
      {/* small screen */}

      <div className="-mt-px">
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex items-center py-2">
            <Button
              type="button"
              className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg"
            >
              <PanelRightOpen size={30} />
            </Button>
            <ol className="ms-3 flex items-center whitespace-nowrap">
              <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                Application Layout
                <ChevronRight size={20} />
              </li>
              <li
                className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
                aria-current="page"
              >
                Dashboard
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
