"use client";
const ErrorReloadButton = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Network Error Occurred !
      </h1>
      <button
        onClick={handleReload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorReloadButton;
