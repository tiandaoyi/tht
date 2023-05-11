interface addendQueryParams {
  [key: string]: string | number | boolean;
}

export function isJSON(obj: any): boolean {
  try {
    const json = JSON.stringify(obj);
    return typeof json === 'string';
  } catch (e) {
    return false;
  }
}

export function appendQuery(url: string, params: addendQueryParams) {
  const query = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
  return `${url}${url.includes('?') ? '&' : '?'}${query}`;
}
