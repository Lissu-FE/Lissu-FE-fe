import { Thumbnail, ProductInfoWrapper, Name, Price, ErrorWrapper } from './ProductDetailStyle';
import useProductDetail from './useProductDetail';

const ProductDetail = () => {
  const { product, isError } = useProductDetail();

  if (isError) {
    return <ErrorWrapper>존재하지 않는 상품 입니다.</ErrorWrapper>;
  }

  if (!product) {
    return <></>;
  }

  return (
    <>
      <Thumbnail
        src={product.thumbnail ? product.thumbnail : '/defaultThumbnail.jpg'}
        alt='thumbnail'
      />
      <ProductInfoWrapper>
        <Name>{product.name}</Name>
        <Price>{product.price.toLocaleString()}원</Price>
      </ProductInfoWrapper>
    </>
  );
};

export default ProductDetail;
