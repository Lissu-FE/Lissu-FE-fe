import axios from 'axios';

export const getProductList = async (page: number, size: number) => {
  return await axios.get(`/products?page=${page}&size=${size}`);
};

export const getProductDetail = async (productId: string) => {
  return await axios.get(`/products/${productId}`);
};
