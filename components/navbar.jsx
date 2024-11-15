//third-party imports

import { AlignRight, ChevronDown, ChevronLeft, X } from "lucide-react";

// library imports
import Link from "next/link";

// components imports
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white  dark:bg-neutral-800 dark:border-neutral-700 ">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-5 px-4 sm:px-6 lg:px-8 border-b border-secondry">
        <div className="flex justify-between items-center gap-x-1">
          <Link
            className="flex items-center justify-center gap-2 font-semibold text-xl text-black "
            href="/"
            aria-label="Brand"
          >
            <Image
              src="logo.svg"
              alt="application-logo"
              width={50}
              height={50}
            />
            <span>ZipLynk</span>
          </Link>

          <Button
            type="button"
            className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800"
          >
            <AlignRight />
            <X />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>

        <div
          id="hs-header-base"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
          aria-labelledby="hs-header-base-collapse"
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh]">
            <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-0.5 md:gap-1">
                  <Link
                    className="p-2 flex items-center text-sm text-gray-800"
                    href="#"
                    aria-current="page"
                  >
                    Landing
                  </Link>

                  <div className="hs-dropdown">
                    <Button
                      type="button"
                      className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800"
                    >
                      Dropdown
                      <ChevronDown />
                      {/* <ChevronUp /> */}
                    </Button>

                    {/* dropdowm element */}
                    <div className="hidden">
                      <div className="py-1 md:px-1 space-y-0.5">
                        <Link
                          className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg"
                          href="#"
                        >
                          About
                        </Link>

                        {/* nested dropdown */}
                        <div>
                          <Button
                            type="button"
                            className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 "
                          >
                            Sub Menu
                            <ChevronLeft />
                          </Button>

                          <div>
                            <div className="p-1 space-y-1">
                              <Link
                                className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg "
                                href="#"
                              >
                                About
                              </Link>

                              <Link
                                className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg "
                                href="#"
                              >
                                Downloads
                              </Link>

                              <Link
                                className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg "
                                href="#"
                              >
                                Team Account
                              </Link>
                            </div>
                          </div>
                        </div>

                        <Link
                          className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg "
                          href="#"
                        >
                          Downloads
                        </Link>

                        <Link
                          className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg "
                          href="#"
                        >
                          Team Account
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    className="p-2 flex items-center text-sm text-gray-800 rounded-lg"
                    href="#"
                  >
                    Account
                  </Link>

                  <Link
                    className="p-2 flex items-center text-sm text-gray-800 rounded-lg "
                    href="#"
                  >
                    Work
                  </Link>

                  <Link
                    className="p-2 flex items-center text-sm text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Blog
                  </Link>
                </div>
              </div>

              <div className="my-2 md:my-0 md:mx-2">
                <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
              </div>

              <div className=" flex flex-wrap items-center gap-x-1.5">
                <Button className="font-medium text-sm rounded-lg border border-gray-200">
                  Log in
                </Button>
                <Button className="font-medium text-sm rounded-lg border border-gray-200">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
