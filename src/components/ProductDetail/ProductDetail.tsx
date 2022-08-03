import { Thumbnail, ProductInfoWrapper, Name, Price } from './ProductDetailStyle';
import useProductDetail from './useProductDetail';

const ProductDetail = () => {
  const { product } = useProductDetail();

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
