import React from 'react';
import { Template } from 'templates/Template';
import { SearchTable } from 'components/layout/SearchTable/SearchTable';
import { Pagination } from 'components/UI/Pagination';
import { useMedia } from 'hooks/useMedia';
import { SearchTableMobile } from 'components/layout/SearchTable/SearchTableMobile';

const Index = () => {
  const { matchesMobile } = useMedia();

  const search = (props) =>
    matchesMobile
      ? [<SearchTableMobile {...props} />, <Pagination {...props} />]
      : [<SearchTable {...props} />, <Pagination {...props} />];

  return <Template>{(props) => search(props)}</Template>;
};

export default Index;
