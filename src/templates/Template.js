import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from 'components/layout/Header';
import { SearchInputs } from 'components/layout/SearchInputs/SearchInputs';
import { ToggleContext } from 'components/state/context/toggle-context';

const useStyles = makeStyles(({ breakpoints }) => ({
  wholeContainer: {
    position: 'relative',
    overflow: ({ toggled }) => (toggled ? 'hidden' : 'visible'),
    height: '100%',
    '&:after': {
      content: '""',
      position: 'absolute',
      margin: '0 auto',
      width: ({ toggled }) => (toggled ? '100vw' : '0%'),
      height: '100vh',
      left: '0',
      top: '0',
      opacity: '0.6',
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
      // maxWidth: '262px',
    },
  },
}));

export const Template = ({ children, isData, regionHandler, regions, searchHandler }) => {
  const {
    toggleState: { toggled },
    resetToggle,
  } = useContext(ToggleContext);
  const { wholeContainer, container } = useStyles({ toggled });

  return (
    <div className={wholeContainer} onClick={resetToggle}>
      <div className={container}>
        <div style={{ marginBottom: '12px' }}>
          <Header />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <SearchInputs
            isData={isData}
            regionHandler={regionHandler}
            regions={regions}
            searchHandler={searchHandler}
          />
        </div>
        {children()}
      </div>
    </div>
  );
};
