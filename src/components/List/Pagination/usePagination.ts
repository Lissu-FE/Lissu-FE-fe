import { useRouter } from 'next/router';
import { useMemo } from 'react';

const usePagination = (totalPage: number) => {
  const { push, query } = useRouter();
  const currentPage = parseInt((query.page as string) ?? 0);

  const startPage = Math.trunc((currentPage - 1) / 5) * 5 + 1;

  const goPage = (e: any) => {
    const selectPage = parseInt(e.target.textContent);

    if (selectPage !== currentPage) {
      push({ query: { page: selectPage } });
    }
  };

  const isPrevDisabled = useMemo(() => {
    if (Math.floor((currentPage - 1) / 5) === 0) {
      return true;
    }
    return false;
  }, [currentPage]);

  const pageList = useMemo(() => {
    if (totalPage < 6) {
      return [1, 2, 3, 4, 5];
    }

    if (totalPage < startPage + 4) {
      return Array.from({ length: totalPage - startPage + 1 }, (_v, i) => {
        return i + startPage;
      });
    }

    return Array.from({ length: 5 }, (_v, i) => {
      return i + startPage;
    });
  }, [startPage, totalPage]);

  const isNextDisabled = useMemo(() => {
    if (pageList[0] + 5 > totalPage) {
      return true;
    }
    return false;
  }, [pageList, totalPage]);

  const goNextPage = () => {
    push({ query: { page: Math.trunc((currentPage + 4) / 5) * 5 + 1 } });
  };

  const goPrevPage = () => {
    push({ query: { page: startPage - 1 } });
  };

  return { currentPage, goPage, isPrevDisabled, pageList, goNextPage, goPrevPage, isNextDisabled };
};

export default usePagination;
