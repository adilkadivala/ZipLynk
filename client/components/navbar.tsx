"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Link2, Menu, X } from "lucide-react";

export function Navbar() {
  const { resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Logo - Left */}
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

        {/* Center the navigation with flex-1 and justify-center */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#how-it-works"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#join"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Join
            </Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/console"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Log in
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#join"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Join
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
