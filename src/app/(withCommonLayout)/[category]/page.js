import Image from "next/image";
import Link from "next/link";

const CategoryWiseNews = async ({ params }) => {
  // console.log(params);
  const url = params.category === "allNews"
  ? "http://localhost:5000/news/"
  : "http://localhost:5000/news/category";

const method = params.category === "allNews" ? "GET" : "POST";

const data = await fetch(url, {
  method: method,
  headers: {
    "Content-Type": "application/json",
  },
  body: method === "POST" ? JSON.stringify({ category: params.category }) : null,
  next: { revalidate: 1 },
  cache: 'no-store'
});

if (!data.ok) {
  throw new Error(`Failed to fetch data: ${data.status} ${data.statusText}`);
}

const news = await data.json();

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

export default CategoryWiseNews;
