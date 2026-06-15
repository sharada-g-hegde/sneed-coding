export default async function graphQlClient<T>(
  query: string,
  tags: string[],
  disableCache: boolean = false,
  attempt = 1,
): Promise<T> {
  const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
  const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const ENVIRONMENT_ID =
    process.env.CONTENTFUL_ENVIRONMENT_ID ?? "marketing-v2";

  // The URL to the Contentful GraphQL API
  // For more information on the API, see https://www.contentful.com/developers/docs/references/graphql
  const REQUEST_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}`;

  const response = await fetch(REQUEST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { tags: ["contentful", ...tags] },
    cache: disableCache ? "no-store" : "force-cache",
  });

  if (response.status === 429) {
    const resetAfter =
      Number(response.headers.get("X-Contentful-RateLimit-Reset")) || 1;
    const retryAfter = resetAfter * 1000;

    if (attempt <= 5) {
      console.warn(
        `Rate limit hit. Retrying in ${retryAfter}ms (attempt ${attempt}/5)...`,
      );

      await new Promise((res) => setTimeout(res, retryAfter));

      return graphQlClient<T>(query, tags, disableCache, attempt + 1);
    } else {
      throw new Error("Exceeded maximum retry attempts due to rate limiting.");
    }
  }

  if (!response.ok) {
    // passing the cause as server error response to the error will help in debugging the issue.
    // For error codes refer https://www.contentful.com/developers/docs/references/graphql/#/reference/graphql-errors
    const cause = await response.json();

    throw new Error(
      `Failed to fetch from Contentful \n- cause: ${JSON.stringify(cause)}`,
      { cause },
    );
  }

  return response.json();
}
