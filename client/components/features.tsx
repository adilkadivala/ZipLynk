import { Link2, BarChart3, Shield } from "lucide-react";

export function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 dark:bg-secondary/10"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything you need in a URL shortener
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ZipLynk provides powerful features to help you manage, track, and
              optimize your shortened URLs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <Link2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Custom URLs</h3>
            <p className="text-center text-muted-foreground">
              Create branded, memorable links that reflect your identity.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Advanced Analytics</h3>
            <p className="text-center text-muted-foreground">
              Track clicks, geographic data, and referrers in real-time.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Secure & Reliable</h3>
            <p className="text-center text-muted-foreground">
              Enterprise-grade security with 99.9% uptime guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
