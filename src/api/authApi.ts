import axios from 'axios';

export const postLogin = async (params: any) => {
  return await axios.post('/login', params);
};
