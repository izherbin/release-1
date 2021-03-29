import React from 'react';
import { Template } from 'templates/Template';
import { SearchTable } from 'components/layout/SearchTable/SearchTable';
import { Pagination } from 'components/UI/Pagination';
import { useMedia } from 'hooks/useMedia';
import { SearchTableMobile } from 'components/layout/SearchTable/SearchTableMobile';
import { useFetchData } from 'hooks/useFetchData';

const Index = () => {
  const { matchesMobile } = useMedia();
  const {
    isData,
    isPage,
    isRegion,
    isSearch,
    isLoading,
    pageHandler,
    regionHandler,
    searchHandler,
  } = useFetchData();
  const { data, regions } = isData;
  const [allData, pages] = data || [];

  const search = (props) =>
    matchesMobile
      ? [
          <SearchTableMobile {...props} isPage={isPage} data={allData} />,
          <Pagination
          pageHandler={pageHandler}
          pages={pages}
          isRegion={isRegion}
          isSearch={isSearch}
        />,
        ]
      : [
        <SearchTable {...props} isPage={isPage} data={allData} />,
        <Pagination
            pageHandler={pageHandler}
            pages={pages}
            isRegion={isRegion}
            isSearch={isSearch}
          />,
        ];

  return (
    <Template
      isData={allData}
      regionHandler={regionHandler}
      regions={regions}
      searchHandler={searchHandler}
    >
      {(props) => search(props)}
    </Template>
  );
};

export default Index;
