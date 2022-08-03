import { PaginationMainWrapper } from './PaginationMainStyle';
import usePaginationMain from './usePaginationMain';
import Pagination from '../Pagination/Pagination';
import ProductList from '../../ProductList';

const PaginationMain = () => {
  const { totalPage, productList } = usePaginationMain();
  return (
    <PaginationMainWrapper>
      <ProductList products={productList} />
      <Pagination totalPage={totalPage} />
    </PaginationMainWrapper>
  );
};

export default PaginationMain;
