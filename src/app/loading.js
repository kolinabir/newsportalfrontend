import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin h-16 w-16 border-4 border-t-4 border-t-blue-500 border-blue-200 rounded-full"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
        <p className="mt-2 text-sm text-gray-500">Please wait</p>
      </div>
    </div>
  );
};

export default Loading;
