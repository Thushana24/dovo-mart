"use client";

import { navLinks } from "@/app/data/navLinks";
import { LogIn, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 mb-2 w-full overflow-hidden bg-white shadow-sm dark:bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-pink-600 sm:text-3xl">
            Dovo<span className="text-slate-800">MarT.</span>
          </h1>

          <sup className="inline-flex items-center rounded-full bg-pink-600 px-3 py-0.5 text-xs font-semibold text-white">
            plus
          </sup>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8">
          <ul className="hidden gap-6 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium transition hover:text-pink-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Button className="hidden w-32 items-center justify-center gap-2 rounded-4xl sm:flex">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="focus:outline-none sm:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 sm:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            {/* Header */}
            <div className="mb-8 flex items-center justify-between px-6 pt-6">
              <h1 className="text-2xl font-bold text-pink-600">
                Dovo<span className="text-slate-800">MarT</span>
              </h1>

              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-6 px-6">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 text-lg font-medium hover:text-pink-600"
                    >
                      <Icon className="h-5 w-5 text-pink-700" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Login Button */}
            <div className="absolute bottom-0 w-full">
              <Button className="flex w-full items-center justify-center gap-4 rounded-md">
                <LogIn className="h-5 w-5" />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
