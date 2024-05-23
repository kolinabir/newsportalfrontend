import ErrorReloadButton from "@/components/ErrorReloadButton/ErrorReloadButton";
import Image from "next/image";
import Link from "next/link";

const AllNews = async () => {
  let data = null;
  try {
    data = await fetch("https://server.searchbdnews.com/news", {
      next: {
        revalidate: 1,
      },
      priority: true,
    });
  } catch (error) {
    return <ErrorReloadButton></ErrorReloadButton>;
  }

  const news = await data.json();

  if (!news) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
      {news.data.map((newsItem, index) => {
        return (
          <Link
            key={newsItem._id}
            href={`news/${newsItem._id}`}
            className={`bg-white p-4 rounded-md border ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex">
              <div className="w-full lg:w-3/4 pr-4">
                <h1 className="text-xl font-bold">{newsItem.title}</h1>
                <p className="mb-4">{newsItem.description}</p>
              </div>
              <div className="w-full lg:w-1/4 relative h-40">
                <Image
                  src={newsItem.image[0]}
                  alt={newsItem.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllNews;
