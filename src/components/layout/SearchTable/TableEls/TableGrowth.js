import React, { Fragment } from 'react';

export const TableGrowth = ({ data }) => {
  return (
    <Fragment>
      <img src="icons/uptrend.svg" alt="" style={{ marginRight: '4px' }} />
      {data.growth}
    </Fragment>
  );
};
