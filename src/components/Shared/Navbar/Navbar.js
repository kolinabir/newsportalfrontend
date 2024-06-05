"use client";
import { useAuth } from "@/app/auth-context";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <>
      <nav className="bg-[#144F6A] border-b dark:bg-gray-900 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 md:py-3 relative">
            <Link href="/" passHref>
              <p className="text-xl md:text-2xl font-semibold text-white dark:text-white">
                Search BD News
              </p>
            </Link>
            <div className="hidden md:flex md:space-x-4 md:items-center md:ml-auto">
              <Link href="/allnews" passHref>
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
              <div className="relative">
                <input
                  type="text"
                  className="p-2 pl-10 w-64 text-black dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none"
                  placeholder="Search..."
                />
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
              <button
                onClick={toggleDarkMode}
                className="text-white dark:text-gray-300 focus:outline-none"
              >
                {isDarkMode ? (
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
                      d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12H3m15.364-4.364l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                    />
                  </svg>
                ) : (
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
                      d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 ${
                    isSidebarOpen ? "transform rotate-90" : ""
                  }`}
                  fill="#000000"
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
        <div className="h-full flex flex-col justify-between bg-gray-100 dark:bg-gray-900">
          <div className="p-4">
            <Link href="/allnews" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 rounded-md p-2 mb-2 transition-all duration-300 ease-in-out">
                সকল
              </p>
            </Link>
            <Link href="/economy" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 rounded-md p-2 mb-2 transition-all duration-300 ease-in-out">
                অর্থনীতি
              </p>
            </Link>
            <Link href="/country" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 rounded-md p-2 mb-2 transition-all duration-300 ease-in-out">
                সারাদেশ
              </p>
            </Link>
            <Link href="/national" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 rounded-md p-2 mb-2 transition-all duration-300 ease-in-out">
                জাতীয়
              </p>
            </Link>
            <Link href="/international" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 rounded-md p-2 mb-2 transition-all duration-300 ease-in-out">
                আন্তর্জাতিক
              </p>
            </Link>
            <Link href="/sports" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 rounded-md p-2 mb-2 transition-all duration-300 ease-in-out">
                খেলা
              </p>
            </Link>
            <Link href="/entertainment" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 rounded-md p-2 mb-2 transition-all duration-300 ease-in-out">
                বিনোদন
              </p>
            </Link>
            <Link href="/jobs" passHref>
              <p className="nav-link text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 rounded-md p-2 mb-2 transition-all duration-300 ease-in-out">
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
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Navbar;
