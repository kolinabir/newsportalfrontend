export const viewAllNews = async (id) => {
  const response = await fetch(`http://localhost:5000/news/${id}`, {
    next: {
      revalidate: 1,
    },
    cache: "no-store",
  });
  const data = await response.json();
  return data.data[0];
};
