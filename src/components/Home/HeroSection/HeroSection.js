import Image from "next/image";
import Link from "next/link";

const HeroSection = async () => {
  const data = await fetch("http://localhost:5000/news/");
  const news = await data.json();

  return (
    <div className="flex items-center">
      <div className="flex-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            {/* First news item */}
            {news.data.slice(0, 1).map((n, index) => (
              <Link
                key={index}
                href={`news/${n._id}`}
                className="bg-white rounded-lg border h-[258px] p-4 col-span-12"
              >
                <div key={index}>
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-4xl font-bold">{n.title}</h2>
                      <p className="">{n.description}</p>
                    </div>
                    <div className="relative w-[700px] h-[228px]">
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
              </Link>
            ))}
            {/* Second and third news items */}
            {news.data.slice(1, 3).map((n, index) => (
              <div
                key={index}
                href={`news/${n._id}`}
                className="bg-white rounded-lg border h-[136px]  p-4 col-span-6"
              >
                <div className="flex   justify-between">
                  <div>
                    <h2 className="text-xl font-medium">{n.title}</h2>
                    <p>
                      {n.description.split(" ").length > 5
                        ? n.description.split(" ").slice(0, 10).join(" ") +
                          "..."
                        : n.description}
                    </p>
                  </div>
                  <div className="relative h-24 w-52">
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
              <div
                key={index}
                className="bg-white rounded-lg border h-[118px] p-4 col-span-4"
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-4 bg-white rounded-lg border flex justify-center items-center ml-14 p-4">
        Feedback section is here
      </div>
    </div>
  );
};

export default HeroSection;
