import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Shorten URLs, Expand Possibilities
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ZipLynk transforms long, unwieldy links into short, memorable
                URLs that drive more clicks and improve user experience.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="flex-1 min-w-[50%]">
                <Input
                  type="url"
                  placeholder="Paste your long URL here"
                  className="h-12"
                />
              </div>
              <Button className="h-12 px-8">
                Shorten URL
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No registration required. Free for basic usage.
            </p>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4 bg-background border rounded-lg shadow-xl p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="h-8 bg-muted rounded-md w-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded-md w-3/4" />
                    <div className="h-4 bg-primary/30 rounded-md w-1/2" />
                    <div className="h-4 bg-muted rounded-md w-5/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
