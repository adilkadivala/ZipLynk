export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, Fast, Effective
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Shorten URLs in seconds with our intuitive platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-bold">Paste your URL</h3>
            <p className="text-center text-muted-foreground">
              Enter your long URL into the input field.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-bold">Click Shorten</h3>
            <p className="text-center text-muted-foreground">
              Our system instantly creates a short, memorable link.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-bold">Share Anywhere</h3>
            <p className="text-center text-muted-foreground">
              Copy and share your new ZipLynk URL with anyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
