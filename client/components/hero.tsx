import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Geometric Background */}
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

      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none xl:text-8xl/none">
              Shorten URLs,{" "}
              <span className="text-primary dark:text-primary">
                Expand Possibilities
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Join thousands of users who trust ZipLynk to transform long,
              unwieldy links into short, memorable URLs that drive more clicks.
            </p>
          </div>
          <div className="w-full max-w-2xl space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="url"
                placeholder="Paste your long URL here"
                className="h-12 text-base"
              />
              <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                Shorten URL
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" />
              Totally safe! Don't worry about your data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
