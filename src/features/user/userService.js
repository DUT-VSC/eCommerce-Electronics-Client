import axios from "axios";
import { authMiddleware, base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    return response.data;
  }
};

const getUserWishList = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, authMiddleware);
  if (response.data) {
    return response.data;
  }
};

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`,cartData, authMiddleware);
  if (response.data) {
    return response.data;
  }
};

const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, authMiddleware);
  if (response.data) {
    return response.data;
  }
};
export const authService = {
  register,
  login,
  getUserWishList,
  addToCart,
  getCart,
};
