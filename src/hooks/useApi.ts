import { useQuery } from 'react-query';

const fetchFromApi = async (url: string) => {
  const res = await fetch(url);
  const payload = await res.json();
  return payload;
};

const useApi = (key: any, url: string) => {
  const setApi = () => {};
  return useQuery('random-key', () => fetchFromApi(url));
};

export { useApi };
