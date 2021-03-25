import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from 'components/layout/Header';
import { SearchInputs } from 'components/layout/SearchInputs/SearchInputs';
import { useToggle } from 'hooks/useToggle';

const useStyles = makeStyles(({ breakpoints }) => ({
  wholeCongtainer: {},
  container: {
    position: 'relative',
    maxWidth: '949px',
    margin: '0 auto',
    padding: '0 0 40px 0',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      color: '#fff',
      opacity: '0.5',
      left: '0',
      top: '0',
    },
    [breakpoints.down('md')]: {
      maxWidth: '704px',
    },
    [breakpoints.down('sm')]: {
      maxWidth: '262px',
    },
  },
}));

export const Template = ({ children }) => {
  const { isToggle, toggleHandler, setToggle } = useToggle();
  const { wholeContainer, container } = useStyles({ isToggle });
  const resetToggle = () => isToggle && setToggle(false);

  return (
    <div className={wholeContainer} onClick={resetToggle}>
      <div className={container}>
        <div style={{ marginBottom: '12px' }}>
          <Header />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <SearchInputs toggleHandler={toggleHandler} isToggle={isToggle} />
        </div>
        {children()}
      </div>
    </div>
  );
};
