import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex gap-2 items-center text-lg font-bold">
          <Zap className="h-5 w-5 text-primary" />
          <span>ZipLynk</span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} ZipLynk. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:underline"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
