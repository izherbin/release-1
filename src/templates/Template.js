import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from 'components/layout/Header';
import { SearchInputs } from 'components/layout/SearchInputs/SearchInputs';
import { ToggleContext } from 'components/state/context/toggle-context';
import { useFetchData } from 'hooks/useFetchData';

const useStyles = makeStyles(({ breakpoints }) => ({
  wholeContainer: {
    position: 'relative',
    height: '100%',
    overflow: ({ dimmed }) => (dimmed ? 'hidden' : 'visible'),
    '&:after': {
      zIndex: '0',
      content: '""',
      position: 'absolute',
      margin: '0 auto',
      opacity: ({ dimmed }) => (dimmed ? '0.6' : '1'),
      width: ({ dimmed }) => (dimmed ? '100vw' : '0%'),
      height: '100vh',
      left: '0',
      top: '0',
      backgroundColor: '#000',
    },
  },
  container: {
    width: '949px',
    height: '100%',
    margin: '0 auto',
    [breakpoints.down('md')]: {
      maxWidth: '704px',
    },
    [breakpoints.down('sm')]: {
      width: 'auto',
      padding: '0 29px',
    },
  },
}));

export const Template = ({ children }) => {
  const {
    toggleState: { dimmed },
    resetHandler,
  } = useContext(ToggleContext);
  const { wholeContainer, container } = useStyles({ dimmed });
  const { isData, ...rest } = useFetchData();

  const { data = [], regions } = isData;
  const [, pages] = data;
  const dataObject = { items: data, pages, ...rest };

  return (
    <div className={wholeContainer} onClick={resetHandler}>
      <div className={container}>
        <div style={{ marginBottom: '12px' }}>
          <Header />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <SearchInputs regions={regions} {...rest} />
        </div>
        {children(dataObject)}
      </div>
    </div>
  );
};
