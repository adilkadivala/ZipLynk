import Image from "next/image";
import Link from "next/link";

// third-party imports
import {
  ChevronRight,
  Loader2,
  PanelRightOpen,
  Search,
} from "lucide-react";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

// components imports
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const DashboardNav = () => {
  return (
    <>
      <header className="sticky top-0 inset-x-0 z-10 flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white border-b text-sm py-2.5 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="sm:px-6 flex items-center justify-between md:justify-evenly basis-full w-full mx-auto">
          <div className=" lg:w-[13.5rem] w-20  border-r ">
            {/* <!-- Logo --> */}
            <Link
              className="flex items-center md:justify-start justify-center gap-5 rounded-xl text-xl font-semibold"
              href="/"
            >
              <Image
                src="logo.svg"
                alt="application-logo"
                width={35}
                height={35}
              />
              <span className="hidden lg:block">ZipLynk</span>
            </Link>
            {/* <!-- End Logo --> */}
          </div>

          <div className=" flex flex-1 items-center md:justify-between justify-end gap-x-1 md:gap-x-3">
            <div className="hidden md:block ms-10">
              {/* <!-- Search Input --> */}
              <div className="relative ">
                <div className="absolute inset-y-0  flex items-center ps-3.5">
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
              <div className="hs-dropdown relative inline-flex">
                <ClerkLoaded>
                  <UserButton />
                </ClerkLoaded>
                <ClerkLoading>
                  <Loader2 className="size-8 animate-spin text-slate-400" />
                </ClerkLoading>
              </div>
              {/* <!-- End Dropdown --> */}
            </div>
          </div>
        </nav>
      </header>
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
