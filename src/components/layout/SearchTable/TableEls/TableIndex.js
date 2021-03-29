import React, { Fragment } from 'react';

export const TableIndex = ({ isPage, index }) => {
  const countNumber = isPage === '1' ? Number(isPage) + index : Number(isPage - 1) * 20 + index + 1;

  return (
    <Fragment>
      {countNumber <= 9 && `0${countNumber}`}
      {countNumber > 9 && `${countNumber}`}
    </Fragment>
  );
};
