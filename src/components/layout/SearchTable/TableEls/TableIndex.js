import React, { Fragment } from 'react';

export const TableIndex = ({ number }) => {
  return (
    <Fragment>
      {number <= 9 && `0${number}`}
      {number > 9 && `${number}`}
    </Fragment>
  );
};
