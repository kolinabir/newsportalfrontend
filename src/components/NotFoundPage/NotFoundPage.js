"use client";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col  items-center justify-center bg-gray-100 p-4">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">
        No news found here
      </h1>
      <p className="text-gray-600 mb-6">
        The news you are looking for might have been removed or is temporarily
        unavailable
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
