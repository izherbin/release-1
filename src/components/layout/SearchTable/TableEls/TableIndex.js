import React, { Fragment } from 'react';

export const TableIndex = ({ index }) => {
  return (
    <Fragment>
      {index < 9 && `0${index + 1}`}
      {index >= 9 && `${index + 1}`}
    </Fragment>
  );
};
