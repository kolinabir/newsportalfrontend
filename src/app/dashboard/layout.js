"use client";
import React, { useEffect } from "react";
import { useAuth } from "../auth-context";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  const { user, loading } = useAuth();
  const isUser = user && !loading;
  useEffect(() => {
    if (!isUser && !loading) {
      redirect("/login");
    }
  }, [user, loading, isUser]);
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 bg-gray-800 h-screen p-4">
        <div className="bg-white rounded-lg shadow-md h-full">
          <div className="p-4 border-b border-gray-300">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <div className="p-4">
            <ul>
              <li className="my-2">
                <Link
                  href="/dashboard"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  New Update
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/dashboard/createnews"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Create New News
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/view-all"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  View All News
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/update"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Update News
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/hide"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029c1.264-1.841 3.118-3.109 5.333-3.453a10.058 10.058 0 012.67.173 10.05 10.05 0 005.468 3.286c1.129.305 2.305.488 3.406.488a9.972 9.972 0 003.877-1.007 9.97 9.97 0 002.548-2.332c.364-.57.665-1.238.833-1.945M15.83 12a3 3 0 00-2.828 4.031 9.97 9.97 0 002.348 2.348c.642.428 1.332.787 2.04 1.051m1.123-.235c.95-.547 2.039-1.38 2.942-2.49.58-.715.994-1.486 1.194-2.241a8.962 8.962 0 00-1.556-3.644c-.833-1.25-1.95-2.206-3.273-2.854-.667-.326-1.446-.543-2.201-.614"
                    />
                  </svg>
                  Hide News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
