import React from "react";
import Image from "next/image";
import Link from "next/link";

const Entertainment = async () => {
  // const data = await fetch("http://localhost:5000/news/");
  // const news = await data.json();
  // console.log(news.data);
  const data = await fetch("http://localhost:5000/news/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: "research",
      
    }),
    
  });
  if (!data.ok) {
    throw new Error(`Failed to fetch data: ${data.status} ${data.statusText}`);
  }
  const news = await data.json();
  console.log(news);

  return (
    <div className="md:mb-10 ">
      <h1 className="text-2xl md:mb-4 font-bold">Entertainment News</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* First news item */}
        {news.data.slice(0, 1).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-medium">{n.title}</h2>
              </div>
              <div className="relative h-20 w-28 md:h-24 md:w-32">
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
        {news.data.slice(4, 5).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4 row-span-3"
          >
            <div className="flex justify-between">
              <div>
                <div className="relative lg:h-60 h-48 lg:w-[455px]">
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
        {news.data.slice(1, 6).map((n, index) => (
          <Link
            key={index}
            href={`news/${n._id}`}
            className="bg-white border rounded-lg  p-4"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-medium">{n.title}</h2>
              </div>
              <div className="relative h-24 w-56">
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

export default Entertainment;
