import axios from "axios";

const API_KEY = "03582cabf67544d6f29ca20211f63af3";

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

// Category endpoints
export const requests = {
  trending: "/trending/movie/week",
  action: "/discover/movie?with_genres=28",
  comedy: "/discover/movie?with_genres=35",
  originals: "/discover/tv?with_networks=213",
};
export default tmdb;
