"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

// container
import Container from "./Container";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Container>
    <nav className="bg-white shadow-md w-full sticky top-0 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link className="text-xl font-bold" href={"/"}>Exclusive</Link>
          </div>

          {/* Centered Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 font-semibold"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 font-semibold"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 font-semibold"
              >
                About
              </Link>
              <Link
                href="/signup"
                className="text-gray-600 hover:text-blue-600 font-semibold"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block relative">
            <input
              type="text"
              className="outline-none bg-gray-200 rounded-md pl-3 pr-7 py-3"
              placeholder="What are you looking for?"
            />
            <Search className="absolute right-1 top-[13px] text-gray-500" />
            <ShoppingCart className="absolute -right-7 top-[15px]" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
          <ShoppingCart className="mr-3" />
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {navOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 py-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Sign Up
              </Link>
              <div className="relative">
            <input
              type="text"
              className="outline-none bg-gray-200 rounded-md pl-3 pr-7 py-3"
              placeholder="What are you looking for?"
            />
          </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </Container>
  );
}
