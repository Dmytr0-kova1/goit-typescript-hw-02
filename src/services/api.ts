import axios from "axios";

const ACCESS_KEY = "w5q6zT_92caTJC4iVx_q8ATJRPv51uKb1QzmaeuHfDA";
const BASE_URL = "https://api.unsplash.com/search/photos";

export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
  };
}

interface Data {
  results: Image[];
  total: number;
  total_pages: number;
}

const fetchPhotos = async (query: string, page: number): Promise<Data> => {
  const { data } = await axios.get<Data>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return data;
};

export default fetchPhotos;
