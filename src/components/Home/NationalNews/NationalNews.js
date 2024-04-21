import React from "react";
import Image from "next/image";

const NationalNews = async () => {
  const data = await fetch("http://localhost:5000/news/");
  const news = await data.json();
  // console.log(news.data);

  return (
    <div>
      <h1 className="col-span-4 lg:col-span-2 text-2xl font-bold">
        National News
      </h1>

      <div className="flex">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {/* First news item */}
          {news.data.slice(0, 1).map((n, index) => (
            <div key={index} className="bg-gray-200 p-4 row-span-3 col-span-2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">{n.title}</h2>
                  <p>{n.description}</p>
                </div>
                <div className="relative h-44 w-64">
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
          {/* Last three news items as rows */}
          {news.data.slice(1, 4).map((n, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 col-span-4  lg:col-span-2"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">{n.title}</h2>
                  <p>{n.description}</p>
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
        {/* <h1 className="text-xl font-bold mb-4">Latest News</h1> */}
        {news.data.slice(1,4).map((n, index) => (
          <div key={index} className="bg-gray-200 p-4 w-96 h-40 ml-2 mb-2">
            <div className="flex">
            <div>
            <h2 className="text-xl font-bold">{n.title}</h2>
            <p>{n.description}</p>
            </div>
            <div className="relative h-16 w-36">
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
