import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { useQueryClient } from '@tanstack/react-query';

import products from '../api/data/products.json';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination/Pagination';

const PaginationPage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData(['pagination', page]) as any;

  return (
    <Container>
      <ProductList products={products.slice(0, 10)} />
      <Pagination />
    </Container>
  );
};

export default PaginationPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
