import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropElement } from 'components/UI/DropDown/DropElement';
import { useToggle } from 'hooks/useToggle';
import { useRegionSelect } from 'hooks/useRegionSelect';

const useStyles = makeStyles(({ palette: { primary, blueLight }, shadow }) => ({
  container: {
    width: '216px',
    padding: '9px 0 0 0',
    borderRadius: '4px',
    background: primary.dim,
    boxShadow: shadow.primary,
  },
  title: {
    position: 'relative',
    color: blueLight,
    margin: '0 0 8px 16px',
    '&:after': {
      position: 'absolute',
      bottom: '-8px',
      left: '-16px',
      content: '""',
      width: '207px',
      height: '1px',
      backgroundColor: primary.main,
    },
  },
  content: {
    maxHeight: '260px',
    overflow: 'scroll',
  },
}));

export const DropDown = ({ isData = [], selectHandler }) => {
  const { container, title, content } = useStyles();
  const russia = { country: 'Россия' };
  const { isToggle, toggleHandler } = useToggle();
  const { filteredRussia, filteredCountries } = useRegionSelect(isData);

  const data = filteredRussia.map((el, i) => (
    <DropElement
      index={i}
      object={el}
      russia
      selectHandler={selectHandler}
      handler={toggleHandler}
    />
  ));

  return (
    <div className={container}>
      <div className={title}>Регион запуска бизнеса</div>
      <div className={content}>
        <DropElement
          object={russia}
          handler={toggleHandler}
          first
          isToggle={isToggle}
          selectHandler={selectHandler}
        />
        {isToggle && data}
        {filteredCountries.map((el) => (
          <DropElement handler={toggleHandler} object={el} selectHandler={selectHandler} />
        ))}
      </div>
    </div>
  );
};
