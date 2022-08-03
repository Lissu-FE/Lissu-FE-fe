import styled from 'styled-components';
import Link from 'next/link';

import { Product } from '../types/product';

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product: { name, thumbnail, price, id } }: ProductItemProps) => {
  return (
    <Link href={`/products/${id}`} passHref>
      <Container>
        <Thumbnail
          src={thumbnail ? thumbnail : '/defaultThumbnail.jpg'}
          loading='lazy'
          height={180}
          width={180}
        />
        <Name>{name}</Name>
        <Price>{price.toLocaleString()}</Price>
      </Container>
    </Link>
  );
};

export default ProductItem;

const Container = styled.a`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Thumbnail = styled.img``;

const Name = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

const Price = styled.div`
  margin-top: 4px;
`;
