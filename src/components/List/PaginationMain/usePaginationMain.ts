import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { getProductList } from '../../../api/productApi';

const usePaginationMain = () => {
  const { query } = useRouter();
  const SIZE = 10;
  const currentPage = parseInt((query.page as string) ?? 0);
  const [totalPage, setTotalPage] = useState(1);
  const [productList, setProductList] = useState([]);

  useQuery(['pagination', currentPage], () => getProductList(currentPage, SIZE), {
    enabled: currentPage !== 0,
    onSuccess: (data) => {
      setTotalPage(Math.ceil(data.data.data.totalCount / SIZE));
      setProductList(data.data.data.products);
    },
  });

  return { totalPage, productList };
};

export default usePaginationMain;
