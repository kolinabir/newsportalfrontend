import React from "react";
import Image from "next/image";
import Link from "next/link";

const Jobs = async () => {
  const data = await fetch("http://localhost:5000/news/", {
    next: {
      revalidate: 1,
    },
    cache: "no-store",
  });
  const news = await data.json();
  // console.log(news.data);

  return (
    <div className="md:mb-10 ">
      <h1 className="text-2xl font-bold">Jobs News</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First news item */}
        {news.data.slice(0, 1).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4 row-span-3"
          >
            <div className="flex justify-between">
              <div>
                <div className="relative h-60 ">
                  <Image
                    src={n.image[0]}
                    alt={n.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h2 className="text-xl font-medium">{n.title}</h2>
                <p>{n.description}</p>
              </div>
            </div>
          </Link>
        ))}
        {/* Last three news items as rows */}
        {news.data.slice(4, 7).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-medium">{n.title}</h2>
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
            className="bg-white border rounded-lg  p-4"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-medium">{n.title}</h2>
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
