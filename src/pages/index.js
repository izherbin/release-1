import React from 'react';
import { Template } from 'templates/Template';
import { SearchTable } from 'components/layout/SearchTable/SearchTable';
import { Pagination } from 'components/UI/Pagination';

const Index = () => {
  return (
    <Template>
      <SearchTable />
      <Pagination />
    </Template>
  );
};

export default Index;
