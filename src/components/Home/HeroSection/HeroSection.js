import Image from "next/image";
import Link from "next/link";

const HeroSection = async () => {
  const data = await fetch(
    "http://localhost:5000/news/",

    {
      next: {
        revalidate: 1,
      },
      cache: "no-store",
    }
  );
  const news = await data.json();

  return (
    <div className="lg:flex md:mb-10 lg:items-center">
      <div className="flex-1">
        <div className="container md:mx-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            {/* First news item */}
            {news.data.slice(0, 1).map((n, index) => (
              <Link
                key={index}
                href={`news/${n._id}`}
                className="bg-white rounded-lg border  lg:h-[258px] lg:p-4 lg:col-span-12"
              >
                <div key={index}>
                  <div className="flex flex-col-reverse p-2 lg:p-0  lg:flex-row justify-between">
                    <div>
                      <h2 className="lg:text-4xl text-2xl font-bold">
                        {n.title}
                      </h2>
                      <p className="hidden lg:block">{n.description}</p>
                    </div>
                    <div className="relative  h-48 lg:w-[600px] lg:h-[228px]">
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
              <Link
                key={index}
                href={`news/${n._id}`}
                className="bg-white rounded-lg border lg:h-[136px] lg:p-4 p-2 lg:col-span-6"
              >
                <div className="flex  justify-between">
                  <div>
                    <h2 className="text-xl font-medium">{n.title}</h2>
                    <p className="hidden lg:block">
                      {n.description.split(" ").length > 5
                        ? n.description.split(" ").slice(0, 10).join(" ") +
                          "..."
                        : n.description}
                    </p>
                  </div>
                  <div className="relative h-16 w-40 lg:h-24 lg:w-48">
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
            {/* Rest of the news items */}
            {news.data.slice(3, 9).map((n, index) => (
              <Link
                key={index}
                href={`news/${n._id}`}
                className="bg-white rounded-lg border lg:h-[118px] md:p-4 p-2 md:col-span-4"
              >
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-medium">{n.title}</h2>
                  </div>
                  <div className="relative h-16 w-40 lg:h-24 lg:w-56">
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
      </div>
      <div className="col-span-2 lg:col-span-4 bg-white rounded-lg border lg:flex lg:justify-center lg:items-center lg:ml-28 lg:p-4">
        Feedback
      </div>
    </div>
  );
};

export default HeroSection;
