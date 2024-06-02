"use client";

import { FaPrint } from "react-icons/fa";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="text-gray-500 hover:text-gray-700"
      title="Print"
    >
      <FaPrint />
    </button>
  );
};

export default PrintButton;
