import { Collection, CardData } from "../models/model";

export const fetchData = async function http<BackendResponse>(
  request: RequestInfo
): Promise<BackendResponse> {
  const response = await fetch(request);
  return await response.json();
};

export const fetchExifData = async function http<ExifData>(
  request: RequestInfo
): Promise<ExifData> {
  const response = await fetch(request);
  return await response.json();
};

export const filterData = (data: Collection): Collection => {
  const filtered = data.items.filter(
    (item: CardData) => !item.href.includes("video")
  );

  const newColllection = {
    version: data.version,
    href: data.href,
    items: filtered,
    metadata: data.metadata,
  };

  return newColllection;
};
