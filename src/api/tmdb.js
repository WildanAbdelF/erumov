import axios from "axios";

const API_KEY = "e4d13fadce8b10bd6297eda4a789e5cb";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, language: "en-US" },
});

export default tmdb;
