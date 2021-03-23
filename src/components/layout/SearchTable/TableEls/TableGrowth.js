import React, { Fragment } from 'react';

export const TableGrowth = ({ data }) => {
  return (
    <Fragment>
      <img src="icons/uptrend.svg" alt="" style={{ marginRight: '8px' }} />
      {data.growth}
    </Fragment>
  );
};
