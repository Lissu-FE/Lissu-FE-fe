import { PaginationMainWrapper, ErrorWrapper } from './PaginationMainStyle';
import usePaginationMain from './usePaginationMain';
import Pagination from '../Pagination/Pagination';
import ProductList from '../../ProductList';

const PaginationMain = () => {
  const { totalPage, productList, isError } = usePaginationMain();

  if (isError) {
    return <ErrorWrapper>존재하지 않는 페이지 입니다.</ErrorWrapper>;
  }

  return (
    <PaginationMainWrapper>
      <ProductList products={productList} />
      <Pagination totalPage={totalPage} />
    </PaginationMainWrapper>
  );
};

export default PaginationMain;
