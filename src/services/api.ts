import axios from "axios";

const ACCESS_KEY = "w5q6zT_92caTJC4iVx_q8ATJRPv51uKb1QzmaeuHfDA";
const BASE_URL = "https://api.unsplash.com/search/photos";

const fetchPhotos = async (query, page) => {
  const { data } = await axios.get(BASE_URL, {
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
