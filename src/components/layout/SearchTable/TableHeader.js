import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableHeaderEl } from 'components/layout/SearchTable/TableHeaderEl';
import { useOrderToggle } from 'hooks/useOrderToggle';
import { headerEls } from 'components/layout/SearchTable/headerEls';

const useStyles = makeStyles(({ palette: { primary } }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '40px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: primary.header,
    borderBottom: `1px solid ${primary.main}`,
  },
}));

export const TableHeader = ({ sizes, ...rest }) => {
  const { container } = useStyles();
  const { isOrdered, orderHandler, isUp } = useOrderToggle({ ...rest });
  const elemetNames = headerEls();

  return (
    <div className={container}>
      {elemetNames.map((el, i) => (
        <TableHeaderEl
          key={`${i}header`}
          name={el}
          sizes={sizes}
          index={i}
          isOrdered={isOrdered}
          orderHandler={orderHandler}
          isUp={isUp}
          {...rest}
        />
      ))}
    </div>
  );
};
