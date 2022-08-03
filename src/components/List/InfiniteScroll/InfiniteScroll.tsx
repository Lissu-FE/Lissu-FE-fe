import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { InfiniteScrollWrapper, Target } from './InfiniteScrollStyle';
import { getProductList } from '../../../api/productApi';
import { useIntersect } from './useIntersect';
import ProductList from '../../ProductList';

const InfiniteScroll = () => {
  const SIZE = 16;

  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery(
    ['infinite'],
    ({ pageParam = 1 }) => getProductList(pageParam, SIZE),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        const pageNumber = allPages.length;

        return pageNumber === Math.ceil(lastPage.data.data.totalCount / SIZE)
          ? undefined
          : pageNumber + 1;
      },
    }
  );

  const productList = useMemo(() => {
    if (data) {
      return data.pages.flatMap(({ data }) => data.data.products);
    }

    return [];
  }, [data]);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <InfiniteScrollWrapper>
      <ProductList products={productList} />
      <Target ref={ref} />
    </InfiniteScrollWrapper>
  );
};

export default InfiniteScroll;
