import Image from "next/image";
import Link from "next/link";
import { viewAllNews } from "@/lib/newsApi/viewSingleNews";
import { FaCopy, FaShareAlt, FaPrint } from "react-icons/fa";
import CopyButton from "@/components/Buttons/CopyButton";
import { FacebookShareButton } from "react-share";
import ShareButton from "@/components/Buttons/ShareButton";
import PrintButton from "@/components/Buttons/PrintButton";

export async function generateStaticParams() {
  const data = await fetch("https://server.searchbdnews.com/news");
  const news = await data.json();
  return news.data.map((newsItem) => ({ newsID: newsItem._id }));
}

const SingleNewsDetails = async ({ params }) => {
  const news = await viewAllNews(params.newsID);
  if (!news) {
    return <div>Loading...</div>;
  }

  const publishedAtBangla = new Date(news.createdAt).toLocaleString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-0 mt-2">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
          <div className="border-b border-gray-400 mb-4"></div>
          <p className="text-sm text-gray-500 mb-4">{publishedAtBangla}</p>
          <div className="flex justify-between">
            <div>
              {news.author && (
                <p className="text-sm text-gray-500 mb-4">
                  লেখক: {news.author}
                </p>
              )}{" "}
              <div className="flex space-x-2">
                <CopyButton
                  link={`https://searchbdnews.com/news/${news._id}`}
                />
                <ShareButton
                  link={`https://searchbdnews.com/news/${news._id}`}
                />

                <PrintButton></PrintButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {news.image && news.image[0] && (
        <div className="relative h-96 mb-8">
          <Image
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
          <Image
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
          <Image
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
          // <Link href={`/categories/${category}`} key={index}>
          <p
            key={index}
            className="inline-block px-2 py-1 mr-2 mb-2 bg-gray-200 rounded-md text-xs text-gray-700 hover:bg-gray-300"
          >
            {category}
          </p>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleNewsDetails;
