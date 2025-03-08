"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo - Left */}
        <div className="flex gap-2 items-center text-xl font-bold">
          <Zap className="h-6 w-6 text-primary" />
          <span>ZipLynk</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links - Center */}
        <nav
          className={`absolute md:static top-16 left-0 right-0 bg-background md:bg-transparent border-b md:border-0 ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center md:mx-auto space-y-4 md:space-y-0 space-x-0 md:space-x-6 py-4 md:py-0`}
        >
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </nav>

        {/* Login & Theme Toggle - Right */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Link href="/console">Log in</Link>
          <Button size="sm">Sign up</Button>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile login buttons - shown when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden flex justify-center gap-4 pb-4 border-b bg-background">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">Sign up</Button>
          <ModeToggle />
        </div>
      )}
    </header>
  );
}
