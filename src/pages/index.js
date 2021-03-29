import React from 'react';
import { Template } from 'templates/Template';
import { SearchTable } from 'components/layout/SearchTable/SearchTable';
import { Pagination } from 'components/UI/Pagination';
import { useMedia } from 'hooks/useMedia';
import { SearchTableMobile } from 'components/layout/SearchTable/SearchTableMobile';
import { useFetchData } from 'hooks/useFetchData';

const Index = () => {
  const { matchesMobile } = useMedia();
  const { isData, isLoading, pageHandler, regionHandler, searchHandler } = useFetchData();

  const search = (props) =>
    matchesMobile
      ? [<SearchTableMobile {...props} />, <Pagination />]
      : [<SearchTable {...props} isData={isData} />, <Pagination pageHandler={pageHandler} />];

  return <Template isData={isData}>{(props) => search(props)}</Template>;
};

export default Index;
