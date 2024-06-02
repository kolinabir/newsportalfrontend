"use client";
import React from "react";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

const CopyButton = ({ link }) => {
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(link);
    toast.success("Link copied to clipboard");
  };
  return (
    <div>
      <button
        onClick={copyToClipboard}
        className="text-gray-500 hover:text-gray-700"
        title="Copy"
      >
        <FaCopy />
      </button>
    </div>
  );
};

export default CopyButton;
