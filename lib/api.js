import qs from "qs";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://admin.sanpedropc.org"
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
  const newsData = await fetchAPI(`/news?slug=${slug}`);

  // make sure we found something, otherwise return null
  if (newsData == null || newsData.length === 0) {
    return null;
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

export async function getSortedEventsData() {
  // const query = qs.stringify({ _where: { _or: [{ startDate_gte: new Date().toISOString() }, {  }] } })

  const eventsData = await fetchAPI(
    `/events?endDate_gte=${new Date().toISOString()}`
  );

  // ITERATING OVER RECURRING EVENTS TO KEEP THEM CURRENT
  const currentEventsData = eventsData.map((event) => {
    if (event.repeatsEveryDays > 0) {
      if (new Date(event.startDate) < new Date()) {
        console.log("e: ", event);

        let start = new Date(event.startDate);
        let end = new Date();

        while (start < end) {
          start.setDate(start.getDate() + event.repeatsEveryDays);
        }

        event.startDate = start.toISOString();
      }
    }
    return event;
  });

  eventsData.sort(compare);

  // sort event dates by date field
  function compare(a, b) {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison;
  }

  if (eventsData == null || eventsData.length === 0) {
    return null;
  }

  return eventsData;
}
