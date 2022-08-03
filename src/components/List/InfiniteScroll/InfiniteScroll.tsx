import { useInfiniteQuery } from '@tanstack/react-query';

import { InfiniteScrollWrapper } from './InfiniteScrollStyle';
import { getProductList } from '../../../api/productApi';

const InfiniteScroll = () => {

  useInfiniteQuery(['infinite'],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      axios.get<PaginationResponse<User>>('/users', {
        params: { page: pageParam, size },
      }),
    {
      getNextPageParam: ({ data: { isLastPage, pageNumber } }) =>
        isLastPage ? undefined : pageNumber + 1,
    }

  return <InfiniteScrollWrapper></InfiniteScrollWrapper>;
};

export default InfiniteScroll;
