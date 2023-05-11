import { appendQuery } from "./utils";

interface IThtFetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS" | "PATCH";
  mode?: string;
  cache?: string;
  credentials?: string;
  headers?: any;
  redirect?: string;
  referrerPolicy?: string;
  [key: string]: any;
}

const DEFAULT_FETCH_OPTIONS = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

function getFetchOptions(fetchOptions?: IThtFetchOptions) {
  return {
    ...DEFAULT_FETCH_OPTIONS,
    ...fetchOptions,
  }
}

async function tht(url = "", data: {} | undefined, fetchOptions: IThtFetchOptions) {
  const combinedFetchOptions = getFetchOptions(fetchOptions);
  // Request with GET/HEAD method cannot have body.
  if (['GET', 'HEAD'].includes(combinedFetchOptions.method)) {
    data = undefined;
  }

  // Default options are marked with *
  // If the server requires a node version greater than or equal to 17.5
  // @ts-ignore
  const response = await fetch(url, {
    ...fetchOptions,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function thtGet(url: string, query = {}, fetchOptions = {}) {
  return tht(appendQuery(url, query), undefined, { ...fetchOptions, method: 'GET' });
}

async function thtPost(url: string, data = {}, fetchOptions = {}) {
  return tht(url, data, { ...fetchOptions, method: 'POST' });
}

export { tht, thtGet, thtPost }
