const URL_SHORTENER_SERVER = "https://api.shrtco.de/v2";

export const getByCodeUrl = (code: string) => {
  const url = new URL(`${URL_SHORTENER_SERVER}/info`);
  url.searchParams.set("code", code);
  return url;
};

export const shortenNewUrl = (longAddress: string) => {
  const url = new URL(`${URL_SHORTENER_SERVER}/shorten`);
  url.searchParams.set("url", longAddress);
  return url.toString();
};
