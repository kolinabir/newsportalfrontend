import React from "react";
import Image from "next/image";
import Link from "next/link";

const Lifestyle = async () => {
  // const data = await fetch("https://server.searchbdnews.com/news/", {
  //   next: {
  //     revalidate: 1,
  //   },
  //   cache: "no-store",
  // });
  // const news = await data.json();
  const data = await fetch(
    "https://server.searchbdnews.com/news/category/lifestyle",
    {
      next: {
        revalidate: 1,
      },
    }
  );
  if (!data.ok) {
    throw new Error(`Failed to fetch data: ${data.status} ${data.statusText}`);
  }
  const news = await data.json();

  return (
    <div className="md:mb-10 ">
      <h1 className="text-2xl md:mb-4 font-bold">Lifestyle News</h1>
      {news.data.length === 0 && (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
            No news found here
          </h1>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* First news item */}
        {news.data.slice(0, 1).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4 md:col-span-3 flex hover:scale-105 transition-transform duration-300"
          >
            {/* Image on the left side */}
            <div className="relative h-16 w-16 md:h-60 lg:w-[500px] mr-4">
              <Image
                src={n.image[0]}
                alt={n.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Text on the right side */}
            <div>
              <h2 className="lg:text-5xl text-2xl font-medium hover:text-blue-500 transition-colors duration-300">
                {n.title}
              </h2>
              <p className="hidden lg:block">{n.description}</p>
            </div>
          </Link>
        ))}

        {/* Last three news items as rows */}
        {news.data.slice(4, 7).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex lg:flex-col">
              <div className="relative w-28 h-16 md:w-full object-cover md:h-40 ">
                <Image
                  src={n.image[0]}
                  alt={n.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-medium ml-2 lg:ml-0 hover:text-blue-500 transition-colors duration-300">
                {n.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lifestyle;
