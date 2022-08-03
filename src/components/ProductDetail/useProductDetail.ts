import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { getProductDetail } from '../../api/productApi';
import { Product } from '../../types/product';

const useProductDetail = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  const { isError } = useQuery(['product', query.id], () => getProductDetail(query.id as string), {
    enabled: !!query.id,
    onSuccess: (data) => {
      setProduct(data.data.data.product);
    },
  });

  return { product, isError };
};

export default useProductDetail;
