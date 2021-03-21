import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from 'components/layout/Header';
import { SearchInputs } from 'components/layout/SearchInputs';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '949px',
    margin: '0 auto',
    padding: '0 0 40px 0',
  },
}));

export const Template = ({ children }) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <div style={{ marginBottom: '12px' }}>
        <Header />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <SearchInputs />
      </div>
      {children}
    </div>
  );
};
