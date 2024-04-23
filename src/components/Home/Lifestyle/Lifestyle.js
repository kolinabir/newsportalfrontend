import React from "react";
import Image from "next/image";
import Link from "next/link";

const Lifestyle = async () => {
  const data = await fetch("http://localhost:5000/news/");
  const news = await data.json();

  return (
    <div className="">
      <h1 className="text-2xl font-bold">Lifestyle News</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* First news item */}
        {news.data.slice(0, 1).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4 md:col-span-3 flex"
          >
            {/* Image on the left side */}
            <div className="relative  w-48 lg:h-60 lg:w-[500px] mr-4">
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
              <h2 className="lg:text-5xl text-2xl font-medium">{n.title}</h2>
              <p className="hidden lg:block">{n.description}</p>
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
              <h2 className="text-xl font-medium ml-2 lg:ml-0">{n.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lifestyle;
