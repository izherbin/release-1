import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(({ palette: { blueLight, secondary } }) => ({
  input: {
    width: ({ width }) => width,
    padding: ({ isAdornment }) => (isAdornment ? '11px 15px 11px 44px' : '10px 15px'),
    color: secondary.main,
    borderRadius: '4px!important',
    border: `1px solid ${blueLight}`,
    '&::placeholder': {
      color: secondary.main,
      opacity: '1',
      transform: 'translateY(1px)',
      fontSize: '1.2rem',
    },
  },
  notchedOutline: {
    border: 'none',
  },
  root: {
    width: ({ width }) => width,
    maxHeight: '40px',
    alignItems: 'center',
  },
}));

export const Input = ({
  id,
  defaultV,
  inputHandler,
  onKeyUp,
  length,
  value,
  textMask,
  onBlur,
  onFocus,
  autoFocus,
  placeholder,
  isAdornment = false,
  required = false,
  rows = 0,
  name = '',
  multiline = false,
  isShrink = false,
  type = 'text',
  width = 'auto',
}) => {
  const { inputLabel, notchedOutline, focused, input, root, shrink } = useStyles({
    width,
    isAdornment,
  });
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
      defaultValue={defaultV}
      required={required}
      rows={rows}
      name={name}
      autoFocus={autoFocus}
      type={type}
      key={id}
      placeholder={placeholder}
      {...inputStyle}
    />
  );
};
