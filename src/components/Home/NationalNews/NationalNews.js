import NotFoundPage from "@/components/NotFoundPage/NotFoundPage";
import Image from "next/image";
import Link from "next/link";

const NationalNews = async () => {
  const data = await fetch(
    "https://server.searchbdnews.com/news/category/national",
    {
      next: {
        revalidate: 1,
      },
    }
  );
  const news = await data.json();

  return (
    <div className=" md:border-gray-400 rounded-lg md:mb-10 md:pb-4">
      <div className="md:grid md:grid-cols-10">
        <h1 className="text-xl font-bold md:mb-4 col-span-7">National News</h1>
        <h1 className="text-xl hidden lg:block font-bold ml-14 col-span-3">
          Latest News
        </h1>
      </div>
      {news.data.length === 0 && (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
            No news found here
          </h1>
        </div>
      )}
      <div className="flex">
        <div className="grid grid-cols-1 md:pr-4 md:pt-4 lg:grid-cols-4 gap-2 ">
          {/* First news item */}

          {news.data.slice(0, 1).map((n, index) => (
            <Link
              key={index}
              href={`news/${n._id}`}
              className="bg-white border-b-2 md:border-r-2 rounded-lg p-4 col-span-4 md:row-span-3 md:col-span-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between flex-col-reverse md:flex-col-reverse">
                <div className="flex items-center space-x-4">
                  <div>
                    <h2 className="text-xl font-medium hover:text-blue-500 transition-colors duration-300">
                      {n.title}
                    </h2>
                    <p className="font-normal">{n.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={n.image[0]}
                    alt={n.title}
                    height={280}
                    width={480}
                    // layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            </Link>
          ))}
          {/* Last three news items as rows */}
          {news.data.slice(1, 4).map((n, index) => (
            <Link
              key={index}
              href={`news/${n._id}`}
              className="bg-white border-b-2 rounded-lg  p-4  col-span-4 lg:col-span-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-medium hover:text-blue-500 transition-colors duration-300">
                    {n.title}
                  </h2>
                </div>
                <div className="relative">
                  <Image
                    src={n.image[0]}
                    alt={n.title}
                    height={100}
                    width={200}
                    // layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <div className=" border-l-2 pl-4">
            {news.data.slice(1, 4).map((n, index) => (
              <Link
                key={index}
                href={`news/${n._id}`}
                className="hidden lg:block bg-white rounded-lg border-b-2 p-4 w-96 h-36 ml-2 mb-2 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex">
                  <div>
                    <h2 className="text-xl font-medium hover:text-blue-500 transition-colors duration-300">
                      {n.title}
                    </h2>
                  </div>
                  <div className="relative">
                    <Image
                      src={n.image[0]}
                      alt={n.title}
                      height={100}
                      width={200}
                      // layout="fill"
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
    </div>
  );
};

export default NationalNews;
