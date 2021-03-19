/* eslint-disable max-len */
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  spacing: 8,
  shadow: {
    primary:
      '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
    button:
      '0 2px 2px 0 rgba(244,153,68,0.14), 0 3px 1px -2px rgba(244,153,68,0.12), 0 1px 5px 0 rgba(244,153,68,0.20)',
    strong:
      '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)',
    search: '0 1px 1px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
  },
  // COLORS
  palette: {
    primary: {
      main: '#0A0D1C',
      dim: '#17192D',
    },
    secondary: {
      main: '#FFFFFF',
      gray: '#D2D8D8',
    },
    accent: '#FF3854',
    green: '#1EC78E',
    green_light: '#0AEA83',
    blue: '#286AF0',
    blue_light: '#717FB0',
  },
  // FONTS
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: 12,
    fontWeight: 400,
    htmlFontSize: 10,
    color: '#fff',
    h1: {
      fontSize: '6.8rem',
      lineHeight: '7.2rem',
      fontWeight: 800,
    },
    h2: {
      fontSize: '2rem',
      lineHeight: '2rem',
      fontWeight: 600,
    },
    subtitle: {
      fontSize: '0.8rem',
    },
  },
  // CUSTOM GLOBAL STYLES
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'transparent',
      },
    },
    MuiButton: {
      root: {
        position: 'relative',
        maxHeight: '100%',
        borderRadius: '16px',
        backgroundColor: '#00695C',
        height: '48px',
        '&::after': {
          content: '""',
          position: 'absolute',
          background: 'url(/icons/arrow.svg) no-repeat right',
          transition: 'ease-in-out 0.4s',
          top: 0,
          right: '20px',
          height: '100%',
          width: '100%',
        },
        '&:$hover': {
          backgroundColor: '#00695C',
          boxShadow: '0 2px 4px 0 rgba(71,149,255,0.28)',
        },
        '&$disabled': {
          backgroundColor: '#FCFFFF',
          border: '2px solid #00695C',
        },
      },
      text: {
        width: '100%',
        padding: '16px 48px',
        fontSize: '1.6rem',
        fontWeight: 800,
        lineHeight: '1',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#FCFFFF',
        // zIndex: 1,
        '&:hover': {
          '&::after': {
            transform: 'translateX(8px)',
          },
        },
        '&$disabled': {
          color: '#00695C',
        },
      },
    },
  },
});
export default theme;
