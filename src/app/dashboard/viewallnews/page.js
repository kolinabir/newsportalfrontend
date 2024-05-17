import React from "react";

const viewAllNews = async () => {
  const data = await fetch("https://server.searchbdnews.com/news", {
    next: {
      revalidate: 1,
    },
  });
  const news = await data.json();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 p-4">
      {news.data.map((item) => (
        <div key={item._id} className="bg-white p-4 rounded-md border relative">
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-500 mb-2">
            Date: {new Date(item.createdAt).toLocaleDateString()}
          </p>
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <button className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default viewAllNews;
