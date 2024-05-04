"use client" 
import { useAuth } from "@/app/auth-context";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link href="/" passHref>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              Search BD Views
            </p>
          </Link>

          <div className="flex items-center">
            <button
              type="button"
              className="md:hidden text-gray-600 dark:text-gray-400"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-4 md:items-center md:ml-auto`}
            >
              <Link href="/news" passHref>
                <p className="nav-link text-white"></p>
              </Link>
              <Link href="/politics" passHref>
                <p className="nav-link text-white">সকল</p>
              </Link>
              <Link href="/economy" passHref>
                <p className="nav-link text-white">অর্থনীতি</p>
              </Link>
              <Link href="/country" passHref>
                <p className="nav-link text-white">সারাদেশ</p>
              </Link>
              <Link href="/national" passHref>
                <p className="nav-link text-white">জাতীয়</p>
              </Link>
              <Link href="/international" passHref>
                <p className="nav-link text-white">আন্তর্জাতিক</p>
              </Link>
              <Link href="/sports" passHref>
                <p className="nav-link text-white">খেলা</p>
              </Link>
              <Link href="/entertainment" passHref>
                <p className="nav-link text-white">বিনোদন</p>
              </Link>
              <Link href="/jobs" passHref>
                <p className="nav-link text-white">জবস</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;