import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/background.svg')] dark:before:bg-[url('/backgroundDark.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <span
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full "
            href="#"
          >
            EASY to - share for marketing
          </span>
        </div>

        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Let's ZipLink {""}
            <span className="bg-clip-text bg-gradient-to-tl from-secondry to-primary text-transparent">
              Together
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            ZipLink is a creating shortUrl From long-one, It's easy to use,
            and tracking analytics to events of Links 😉, get chance to try it !!
            absolutely Free 🎉.
          </p>
        </div>

        <div className="mt-8 gap-3 flex justify-center">
          <Link
            className="inline-flex justify-center items-center gap-x-3 text-center text-greenDark bg-gradient-to-tl from-secondry to-primary hover:from-primary hover:to-secondry border border-transparent text-sm font-medium rounded-md focus:outline-none focus:from-primary focus:to-secondry py-3 px-4"
            href="/dashboard"
          >
            Get started
            <ChevronRight />
          </Link>
          <Button
            type="button"
            className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
