import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getAllProducts = async (limit, skip) => {
  const res = await API.get(`/products?limit=${limit}&skip=${skip}`);
  return res?.data;
};

export default API;
