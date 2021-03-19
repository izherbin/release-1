import { makeStyles } from '@material-ui/core/styles';

export const sharedStyles = makeStyles(({ breakpoints, palette: { dim, secondary, gray } }) => ({
  container: {
    width: '100%',
  },
  tbl: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '10px',
  },
  row: {
    display: 'flex',
    minHeight: 40,
    '& $cell': {
      padding: '4px 0',
      flex: 1,
      boxSizing: 'border-box',
    },
    '& $colorCell': {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      fontWeight: 'bold',
      backgroundColor: dim,
      color: secondary.main,
    },
  },
  colorCell: {},
  cell: {
    alignSelf: 'center',
    '&:nth-child(1)': {
      flex: 1,
    },
    '&:nth-child(2)': {
      flex: 1,
    },
  },
  bigCell: {
    flex: '2!important',
  },
  borderLeft: {
    borderRadius: '16px 0 0 16px',
    padding: '0 0 0 12px',
  },
  borderRight: {
    borderRadius: '0 16px 16px 0',
    padding: '0 12px 0 0',
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  withPadding: {
    padding: '12px',
  },
  bold: {
    fontWeight: '800',
  },
  underLine: {
    position: 'relative',
    display: 'inline-block',
    color: dim,
    fontWeight: '800',
  },
  center: {
    textAlign: 'center',
    margin: '0 auto',
  },
  absolute: {
    position: 'absolute',
    top: '12px',
  },
  input: {
    position: 'relative',
    maxWidth: '68px',
    padding: '0!important',
    background: '#FFFFFF',
    border: '1px solid #EEEEEE',
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,0.04), 0 3px 1px -2px rgba(0,0,0,0.04), 0 1px 5px 0 rgba(0,0,0,0.05)',
    borderRadius: 16,
    fontSize: 16,
    color: '#202020',
    letterSpacing: 0,
    [breakpoints.down('md')]: {
      maxWidth: '68px',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  smallInput: {
    maxWidth: '108px',
  },
  lightLine: {
    border: `1px solid ${secondary.gray}20`,
    width: '90%',
    margin: '0 auto',
  },
  withFont: {
    backgroundColor: gray,
  },
}));
