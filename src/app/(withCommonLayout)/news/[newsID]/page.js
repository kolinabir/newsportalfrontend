import Link from "next/link";
import { viewAllNews } from "@/lib/newsApi/viewSingleNews";
import ExportedImage from "next-image-export-optimizer";

export async function generateStaticParams() {
  const data = await fetch("https://server.searchbdnews.com/news");
  const news = await data.json();
  return news.data.map((newsItem) => ({
    newsID: newsItem._id,
  }));
}

const SingleNewsDetails = async ({ params }) => {
  const news = await viewAllNews(params.newsID);
  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-0">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <div className="border-b border-gray-400 mb-4"></div>
      <p className="text-sm text-gray-500 mb-4">
        Published at: {new Date(news.createdAt).toLocaleString()}
      </p>
      {news.image && news.image[0] && (
        <div className="relative h-96 mb-8">
          <ExportedImage
            src={news.image[0] || ""}
            alt={news.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-1 mb-4">
        {news.body.slice(0, 2).map((item, index) => (
          <p
            key={index}
            className={item.textSize === "large" ? "text-lg mb-4" : "mb-4"}
          >
            {item.para}
          </p>
        ))}
      </div>
      {news.image && news.image[1] && (
        <div className="relative h-96 mb-8">
          <ExportedImage
            src={news.image[1] || ""}
            alt={news.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-1 mb-4">
        {news.body.slice(2, 4).map((item, index) => (
          <p key={index} className="mb-4">
            {item.para}
          </p>
        ))}
      </div>
      {news.image && news.image[2] && (
        <div className="relative h-96 mb-8">
          <ExportedImage
            src={news.image[2] || ""}
            alt={news.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-1 mb-4">
        {news.body.slice(4).map((item, index) => (
          <p key={index} className="mb-4">
            {item.para.split("\n").map((text, i) => (
              <span key={i} className="block mb-2">
                {text}
              </span>
            ))}
          </p>
        ))}
      </div>
      <div className="mb-2">
        {news.categories.map((category, index) => (
          <Link href={`/categories/${category}`} key={index}>
            <p className="inline-block px-2 py-1 mr-2 mb-2 bg-gray-200 rounded-md text-xs text-gray-700 hover:bg-gray-300">
              {category}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleNewsDetails;
