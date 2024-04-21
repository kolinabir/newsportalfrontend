import Image from "next/image";

const HeroSection = async () => {
  const data = await fetch("http://localhost:5000/news/");
  const news = await data.json();

  return (
    <div className="min-h-screen flex items-center">
      <div className="flex-1">
        <div className="flex justify-center items-center bg-gray-800 text-white">
          <h1 className="text-4xl">Welcome to the News App</h1>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            {/* First news item */}
            {news.data.slice(0, 1).map((n, index) => (
              <div key={index} className="bg-gray-200 p-4 col-span-12">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{n.title}</h2>
                    <p className="">{n.description}</p>
                  </div>
                  <div className="relative w-[770px] h-[258px]">
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
            {/* Second and third news items */}
            {news.data.slice(1, 3).map((n, index) => (
              <div key={index} className="bg-gray-200 p-4 col-span-6">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{n.title}</h2>
                    <p>{n.description}</p>
                  </div>
                  <div className="relative h-40 w-40">
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
            {/* Rest of the news items */}
            {news.data.slice(3).map((n, index) => (
              <div key={index} className="bg-gray-200 p-4 col-span-4">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{n.title}</h2>
                    <p>{n.description}</p>
                  </div>
                  <div className="relative h-40 w-40">
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
      <div className="col-span-2 lg:col-span-4 bg-gray-200 flex justify-center items-center ml-14 p-4">
        Feedback section is here
      </div>
    </div>
  );
};

export default HeroSection;
