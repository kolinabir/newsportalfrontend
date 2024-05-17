export const viewAllNews = async (id) => {
  const response = await fetch(`https://server.searchbdnews.com/news/${id}`, {
    next: {
      revalidate: 10,
    },
  });
  const data = await response.json();
  return data.data[0];
};
