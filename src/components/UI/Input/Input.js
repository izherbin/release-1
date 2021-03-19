import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(({ palette: { brown, accent, border }, breakpoints }) => ({
  inputLabel: {
    transform: 'translate(14px, 12px) scale(1)',
    filter: 'brightness(1.75)',
    color: '#4B4B55',
    fontSize: '18px',
    [breakpoints.down('sm')]: {
      color: '#4B4B55',
      fontSize: '12px',
      transform: 'translate(10px, 15px) scale(1)',
    },
  },
  shrink: {
    backgroundColor: 'white',
    transform: 'translate(10px, -8px) scale(0.75)!important',
    padding: '4px',
    borderRadius: '8px',
    [breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  input: {
    padding: '10px 14px',
    borderRadius: '14px!important',
    border: `1px solid ${border}`,
  },
  notchedOutline: {
    border: 'none',
    borderRadius: '8px',
  },
  focused: {},
  root: {
    top: '0.2px',
    width: '100%',
    '&:hover $notchedOutline': {
      borderColor: accent,
    },
    '&$focused > $notchedOutline': {
      borderColor: accent,
    },
  },
}));

export const Input = ({
  id,
  label,
  defaultV,
  inputHandler,
  onKeyUp,
  length,
  required = false,
  rows = 0,
  value,
  isShrink,
  name = '',
  multiline = false,
  textMask,
  onBlur,
  onFocus,
  autoFocus,
  type = 'text',
}) => {
  const { inputLabel, notchedOutline, focused, input, root, shrink } = useStyles({});
  const onChangeFunc = (e) => inputHandler(type)(e);

  const inputStyle = {
    variant: 'outlined',
    InputLabelProps: { classes: { root: inputLabel, focused, shrink }, shrink: isShrink },
    classes: {
      root,
    },
    inputProps: {
      maxLength: length || 30,
    },
    InputProps: {
      onChange: onChangeFunc,
      onKeyUp,
      value,
      onBlur,
      onFocus,
      inputComponent: textMask,
      classes: {
        input,
        focused,
        root,
        notchedOutline,
      },
    },
  };

  return (
    <TextField
      multiline={multiline}
      id={id}
      label={label}
      defaultValue={defaultV}
      required={required}
      rows={rows}
      name={name}
      autoFocus={autoFocus}
      type={type}
      key={id}
      {...inputStyle}
    />
  );
};
