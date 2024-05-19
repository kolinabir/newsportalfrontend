import React from "react";
import Image from "next/image";
import Link from "next/link";

const Jobs = async () => {
  const data = await fetch(
    "https://server.searchbdnews.com/news/category/research",
    {
      next: {
        revalidate: 100,
      },
    }
  );
  if (!data.ok) {
    throw new Error(`Failed to fetch data: ${data.status} ${data.statusText}`);
  }
  const news = await data.json();
  // console.log(news.data);

  return (
    <div className="md:mb-10 ">
      <h1 className="text-2xl md:mb-4 font-bold">Jobs News</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First news item */}
        {news.data.slice(0, 1).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4 row-span-3  hover:scale-105 transition-transform duration-300"
          >
            <div className="flex gap-3 justify-between flex-col-reverse md:flex-col-reverse">
              <div className="flex items-center space-x-4">
                <div>
                  <h2 className="text-xl font-bold hover:text-blue-500 transition-colors duration-300">
                    {n.title}
                  </h2>
                  <p>{n.description}</p>
                </div>
              </div>
              <div className="relative h-40 w-full md:h-80 md:w-[450px]">
                <Image
                  src={n.image[0]}
                  alt={n.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
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
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-medium hover:text-blue-500 transition-colors duration-300">
                  {n.title}
                </h2>
              </div>
              <div className="relative h-20 w-40">
                <Image
                  src={n.image[0]}
                  alt={n.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </Link>
        ))}
        {news.data.slice(1, 4).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-medium hover:text-blue-500 transition-colors duration-300">
                  {n.title}
                </h2>
              </div>
              <div className="relative h-20 w-40">
                <Image
                  src={n.image[0]}
                  alt={n.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
