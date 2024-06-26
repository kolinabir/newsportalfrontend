import BackButton from "@/components/BackButton/BackButton";
import Image from "next/image";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
// This function fetches all the categories and generates static paths for them
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://server.searchbdnews.com/news/getAllCategories"
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    const categories = await res.json();
    return categories.data.map((category) => ({
      category: category,
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// This function fetches the news data for a specific category
async function fetchCategoryNews(category) {
  const res = await fetch(
    `https://server.searchbdnews.com/news/category/${category}`,
    {
      next: {
        revalidate: 1000,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// This is the main component for displaying category-wise news
const CategoryWiseNews = async ({ params }) => {
  const news = await fetchCategoryNews(params.category);
  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
      {news.data.length > 0 ? (
        news.data.map((newsItem, index) => (
          <Link
            key={newsItem._id}
            href={`/news/${newsItem._id}`}
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
        ))
      ) : (
        <div className="flex flex-col items-center  justify-center col-span-2 p-4">
          <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            The category you are looking for does not exist. It might have been
            removed or you may have mistyped the URL.
          </p>
          <BackButton />
        </div>
      )}
    </div>
  );
};

export default CategoryWiseNews;
