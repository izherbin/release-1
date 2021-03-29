import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'components/UI/Input';
import { useInputHandler } from 'hooks/useInputHandler';
import { useHidePholder } from 'hooks/useHidePholder';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    left: '18px',
    top: '13px',
  },
}));

export const Search = ({ searchHandler }) => {
  const { container, icon } = useStyles();
  // const { isInputs, inputHandler } = useInputHandler();
  const { isClicked, clickHandler } = useHidePholder('Поиск по нишам');

  return (
    <div
      onFocus={clickHandler}
      onBlur={clickHandler}
      className={container}
      onChange={searchHandler}
    >
      <div className={icon}>
        <img src="icons/search.svg" style={{ height: '16px' }} />
      </div>
      <Input placeholder={isClicked} width="100%" isAdornment />
    </div>
  );
};
