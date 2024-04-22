import React from "react";
import Image from "next/image";

const Lifestyle = async () => {
  const data = await fetch("http://localhost:5000/news/");
  const news = await data.json();
  // console.log(news.data);

  return (
    <div className="">
      <h1 className="text-2xl font-bold">Lifestyle News</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* First news item */}
        {news.data.slice(0, 1).map((n, index) => (
          <div key={index} className="bg-white border rounded-lg  p-4 col-span-3 flex">
            {/* Image on the left side */}
            <div className="relative h-60 w-[500px] mr-4">
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
              <h2 className="text-5xl font-bold">{n.title}</h2>
              <p>{n.description}</p>
            </div>
          </div>
        ))}

        {/* Last three news items as rows */}
        {news.data.slice(4, 7).map((n, index) => (
          <div key={index} className="bg-white border rounded-lg  p-4">
            <div className="relative md:h-40 ">
              <Image
                src={n.image[0]}
                alt={n.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-medium mt-2">{n.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lifestyle;
