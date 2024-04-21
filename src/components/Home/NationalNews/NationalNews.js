import Image from "next/image";
import React from "react";

const NationalNews = async () => {
  const data = await fetch("http://localhost:5000/news/");
  const news = await data.json();
  // console.log(news.data);

  return (
    <div>
      <h1 className="text-xl font-bold">International News</h1>
      <div className="flex">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {/* First news item */}
          {news.data.slice(0, 1).map((n, index) => (
            <div key={index} className="bg-gray-200 p-4 row-span-3 col-span-2">
              <div className="flex justify-between">
                <div>
                <div className="relative h-80 w-[505px]">
                  <Image
                    src={n.image[0]}
                    alt={n.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                  <h2 className="text-xl font-bold">{n.title}</h2>
                  <p>{n.description}</p>
                </div>
                
              </div>
            </div>
          ))}
          {/* Last three news items as rows */}
          {news.data.slice(1, 4).map((n, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 col-span-4 lg:col-span-2"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-medium">{n.title}</h2>
                </div>
                <div className="relative h-28 w-44">
                  <Image
                    src={n.image[0]}
                    alt={n.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          
          {news.data.slice(1, 4).map((n, index) => (
            <div key={index} className="bg-gray-200 p-4 w-96 h-36 ml-2 mb-2">
              <div className="flex">
                <div>
                  <h2 className="text-xl font-medium">{n.title}</h2>
                </div>
                <div className="relative h-24 w-48">
                  <Image
                    src={n.image[0]}
                    alt={n.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NationalNews;
