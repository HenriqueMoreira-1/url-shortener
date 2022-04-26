import axios from "axios";

export const key = "34a033699c9d4d799afc9ef2b4df87f78f528b56";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
