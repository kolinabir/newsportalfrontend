import Image from "next/image";

const HeroSection = async () => {
  const data = await fetch("http://localhost:5000/news/");
  const news = await data.json();
  console.log(news);

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center h-96 bg-gray-800 text-white">
        <h1 className="text-4xl">Welcome to the News App</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {news.data.map((n, index) => (
            <div
              key={index}
              className={`bg-gray-200 p-4 ${
                index === 0
                  ? "col-span-3"
                  : index === 1
                  ? "col-span-2"
                  : "col-span-1"
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">{n.title}</h2>
                  <p>{n.description}</p>
                </div>
                <div className={`relative w-full ${index === 0 ? "h-40 w-60 " : "h-48"} ${index === 1 ? "h-40 w-40 " : "h-48"} ${index === 2 ? "h-40 w-40 " : "h-48"}`}>
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

export default HeroSection;
