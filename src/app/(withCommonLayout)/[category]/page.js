const CategoryWiseNews = async ({ params }) => {
  const data = await fetch("http://localhost:5000/news/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: params.category,
    }),
  });

  if (!data.ok) {
    throw new Error(`Failed to fetch data: ${data.status} ${data.statusText}`);
  }
  const news = await data.json();
  console.log(news);
  return (
    <div>
      {news.data.map((news) => {
        return (
          <div key={news._id}>
            <h1>{news.title}</h1>
            <p>{news.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryWiseNews;
