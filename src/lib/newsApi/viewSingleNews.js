export const viewAllNews = async (id) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // Set timeout to 5000ms

  try {
    const response = await fetch(`https://server.searchbdnews.com/news/${id}`, {
      signal: controller.signal,
      next: {
        revalidate: 1000,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0];
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Fetch request aborted due to timeout');
    } else if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      console.error('Network error or server is not reachable');
    } else {
      console.error('An error occurred:', error);
    }
    return null; // Return null or an appropriate fallback value
  } finally {
    clearTimeout(timeoutId);
  }
};
