import React from 'react';
import { useMedia } from 'hooks/useMedia';
import { TableSaveMb } from 'components/layout/SearchTable/TableEls/TableSave/TableSaveMb';
import { TableSaveDt } from 'components/layout/SearchTable/TableEls/TableSave/TableSaveDt';

export const TableSave = ({}) => {
  const { matchesMobile } = useMedia();

  return (
    <div>
      {!matchesMobile && <TableSaveDt />}
      {matchesMobile && <TableSaveMb />}
    </div>
  );
};
