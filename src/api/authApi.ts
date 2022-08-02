import axios from 'axios';

export const postLogin = async (params: any) => {
  const { data }: any = axios.post('/login', params);
  return data;
};
