"use client";

import { Link2 } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="w-full border-t py-6 md:py-0 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
        <Link href="/" className="flex gap-2 items-center text-xl font-bold">
          <div className="rounded-full bg-primary/10 p-1.5">
            {resolvedTheme === "dark" ? (
              <Link2 className="h-5 w-5 text-primary" color="#fff" />
            ) : (
              <Link2 className="h-5 w-5 text-primary" />
            )}
          </div>
          <span>ZipLynk</span>
        </Link>

        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} ZipLynk. All rights reserved.
        </p>

        <div className="flex gap-4">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
