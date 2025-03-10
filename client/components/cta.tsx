import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  return (
    <section
      id="join"
      className="w-full py-12 md:py-24 lg:py-32 border-t relative overflow-hidden"
    >
      {/* Geometric background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main background color */}
        <div className="absolute inset-0 bg-background"></div>

        {/* Geometric pattern - minimal and small */}
        <div className="absolute inset-0">
          {/* Small circles */}
          <div className="absolute top-[10%] left-[15%] w-3 h-3 rounded-full bg-primary/20 dark:bg-primary/30"></div>
          <div className="absolute top-[25%] left-[40%] w-2 h-2 rounded-full bg-primary/15 dark:bg-primary/25"></div>
          <div className="absolute top-[70%] left-[25%] w-4 h-4 rounded-full bg-primary/10 dark:bg-primary/20"></div>
          <div className="absolute top-[85%] left-[80%] w-3 h-3 rounded-full bg-primary/20 dark:bg-primary/30"></div>
          <div className="absolute top-[15%] left-[75%] w-2 h-2 rounded-full bg-primary/15 dark:bg-primary/25"></div>
          <div className="absolute top-[45%] left-[90%] w-4 h-4 rounded-full bg-primary/10 dark:bg-primary/20"></div>

          {/* Small squares */}
          <div className="absolute top-[30%] left-[10%] w-4 h-4 bg-secondary/15 dark:bg-secondary/25 rotate-45"></div>
          <div className="absolute top-[60%] left-[60%] w-3 h-3 bg-secondary/20 dark:bg-secondary/30 rotate-12"></div>
          <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-secondary/25 dark:bg-secondary/35 rotate-30"></div>
          <div className="absolute top-[75%] left-[45%] w-3 h-3 bg-secondary/15 dark:bg-secondary/25 rotate-[60deg]"></div>

          {/* Small triangles */}
          <div
            className="absolute top-[40%] left-[20%] w-4 h-4 bg-primary/10 dark:bg-primary/20"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
          <div
            className="absolute top-[55%] left-[75%] w-3 h-3 bg-primary/15 dark:bg-primary/25"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
          <div
            className="absolute top-[10%] left-[55%] w-2 h-2 bg-secondary/20 dark:bg-secondary/30"
            style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)" }}
          ></div>
          <div
            className="absolute top-[80%] left-[15%] w-3 h-3 bg-secondary/15 dark:bg-secondary/25"
            style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)" }}
          ></div>

          {/* Diagonal lines */}
          <div className="absolute top-[35%] left-[50%] w-[100px] h-[1px] bg-primary/10 dark:bg-primary/20 rotate-[30deg]"></div>
          <div className="absolute top-[65%] left-[30%] w-[80px] h-[1px] bg-primary/15 dark:bg-primary/25 rotate-[-45deg]"></div>
          <div className="absolute top-[25%] left-[85%] w-[60px] h-[1px] bg-secondary/10 dark:bg-secondary/20 rotate-[60deg]"></div>
          <div className="absolute top-[50%] left-[5%] w-[70px] h-[1px] bg-secondary/15 dark:bg-secondary/25 rotate-[-30deg]"></div>

          {/* Plus signs */}
          <div className="absolute top-[15%] left-[65%] flex items-center justify-center">
            <div className="w-4 h-[1px] bg-primary/20 dark:bg-primary/30"></div>
            <div className="h-4 w-[1px] bg-primary/20 dark:bg-primary/30 absolute"></div>
          </div>
          <div className="absolute top-[70%] left-[35%] flex items-center justify-center">
            <div className="w-3 h-[1px] bg-secondary/20 dark:bg-secondary/30"></div>
            <div className="h-3 w-[1px] bg-secondary/20 dark:bg-secondary/30 absolute"></div>
          </div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_calc(100%-1px),rgba(var(--primary-rgb),0.05)_calc(100%-1px)),linear-gradient(to_bottom,transparent_calc(100%-1px),rgba(var(--primary-rgb),0.05)_calc(100%-1px))] dark:bg-[linear-gradient(to_right,transparent_calc(100%-1px),rgba(var(--primary-rgb),0.1)_calc(100%-1px)),linear-gradient(to_bottom,transparent_calc(100%-1px),rgba(var(--primary-rgb),0.1)_calc(100%-1px))] [background-size:40px_40px] opacity-30"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/80"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of users who trust ZipLynk for their URL shortening
              needs.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Sign Up Free
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              No credit card required.{" "}
              <Link
                href="/terms"
                className="underline underline-offset-2 text-primary hover:text-primary/80"
              >
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
