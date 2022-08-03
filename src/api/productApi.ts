import axios from 'axios';

export const getProductList = async (page: number, size: number) => {
  return await axios.get(`/products?page=${page}&size=${size}`);
};
