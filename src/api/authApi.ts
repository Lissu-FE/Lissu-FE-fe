import axios from 'axios';

export const getUserId = async (userId: string) => {
  return await axios.get(`/users/${userId}`);
};

export const postLogin = async (params: any) => {
  return await axios.post('/login', params);
};
