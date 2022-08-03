import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

import { getProductList } from '../../api/productApi';

const usePagination = () => {
  const { push, query } = useRouter();
  const currentPage: number = parseInt(query.page as string);
  const SIZE = 10;

  const { data } = useQuery(['pagination', currentPage], () => getProductList(currentPage, SIZE));

  const goPage = (e: any) => {
    const selectPage = parseInt(e.target.textContent);

    if (selectPage !== currentPage) {
      push({ query: { page: selectPage } });
    }
  };

  return { currentPage, goPage };
};

export default usePagination;
