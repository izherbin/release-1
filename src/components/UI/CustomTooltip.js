import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(({ palette: { primary, secondary, blueLight }, shadow }) => ({
  arrow: {
    color: primary.dim,
  },
  tooltip: {
    backgroundColor: primary.dim,
    color: secondary.main,
    boxShadow: shadow.primary,
  },
}));

export const CustomTooltip = (props) => {
  const classes = useStyles();

  return <Tooltip arrow classes={classes} {...props} />;
};
