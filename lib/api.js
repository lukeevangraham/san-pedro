export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://admin.sanpedropc.org"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getAllNewsSlugs() {
  const response = await fetchAPI("/news");

  return response.map((article) => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
}

export async function getNewsData(slug) {
  const newsData = await fetchAPI(`/news?slug=${slug}`)

  // make sure we found something, otherwise return null
  if (newsData == null || newsData.length === 0) {
    return null
  }

  // Return the first item since there should only be one result per slug
  return newsData[0];
}

export async function getSortedNewsData() {
  const newsData = await fetchAPI(`/news`);

  if (newsData == null || newsData.length === 0) {
    return null;
  }

  return newsData;
}