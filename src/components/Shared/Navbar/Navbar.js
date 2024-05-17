"use client";
import { useAuth } from "@/app/auth-context";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className=" bg-white border-b border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 md:py-3 relative">
            <Link href="/" passHref>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                Search BD News
              </p>
            </Link>
            <div
              className={`hidden md:flex md:space-x-4 md:items-center md:ml-auto`}
            >
              <Link href="/allnews" passHref>
                <p className="nav-link text-black">সকল</p>
              </Link>
              <Link href="/economy" passHref>
                <p className="nav-link text-black">অর্থনীতি</p>
              </Link>
              <Link href="/country" passHref>
                <p className="nav-link text-black">সারাদেশ</p>
              </Link>
              <Link href="/national" passHref>
                <p className="nav-link text-black">জাতীয়</p>
              </Link>
              <Link href="/international" passHref>
                <p className="nav-link text-black">আন্তর্জাতিক</p>
              </Link>
              <Link href="/sports" passHref>
                <p className="nav-link text-black">খেলা</p>
              </Link>
              <Link href="/entertainment" passHref>
                <p className="nav-link text-black">বিনোদন</p>
              </Link>
              <Link href="/jobs" passHref>
                <p className="nav-link text-black">জবস</p>
              </Link>
            </div>
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isSidebarOpen ? "transform rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="p-4">
            <Link href="/allNews" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                সকল
              </p>
            </Link>
            <Link href="/economy" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                অর্থনীতি
              </p>
            </Link>
            <Link href="/country" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                সারাদেশ
              </p>
            </Link>
            <Link href="/national" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                জাতীয়
              </p>
            </Link>
            <Link href="/international" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                আন্তর্জাতিক
              </p>
            </Link>
            <Link href="/sports" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                খেলা
              </p>
            </Link>
            <Link href="/entertainment" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                বিনোদন
              </p>
            </Link>
            <Link href="/jobs" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                জবস
              </p>
            </Link>
          </div>
          <div className="p-4">
            {/* Add any additional content or actions here */}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed  inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Navbar;
