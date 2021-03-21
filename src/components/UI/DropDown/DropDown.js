import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropElement } from 'components/UI/DropDown/DropElement';

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

export const DropDown = ({}) => {
  const { container, title, content } = useStyles();

  return (
    <div className={container}>
      <div className={title}>Регион запуска бизнеса</div>
      <div className={content}>
        {[...new Array(14)].map((_, i) => (
          <DropElement index={i} />
        ))}
      </div>
    </div>
  );
};
