"use client";

//third-party imports
import { Sun } from "lucide-react";
import { useUser } from "@clerk/nextjs";

// library imports
import Link from "next/link";
import Image from "next/image";

// components imports
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export const Navbar = () => {
  const { user, isLoaded } = useUser();
  // const router = useRouter();

  // useEffect(() => {
  //   if (isSignedIn) {
  //     router.push("/dashboard");
  //   }
  // }, [isSignedIn, router]);

  return (
    <header className=" w-full bg-whitePrimary dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="relative max-w-[85rem] mx-auto flex items-center justify-between py-5 px-4 sm:px-6 lg:px-8 border-b border-secondry">
        <div className="flex w-full justify-between items-center gap-x-1">
          <Link
            className="flex items-center justify-center gap-2 font-semibold text-xl text-black"
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
          <div className="flex gap-1">
            <Button className="font-medium text-sm rounded-lg border border-gray-200">
              <Sun />
            </Button>

            <Link
              className="font-medium text-sm rounded-lg border border-gray-200 py-[7px] px-2.5 inline-flex items-center"
              href="/dashboard"
            >
              {user ? "Console" : "Login"}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
