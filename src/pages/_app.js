import App from 'next/app';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'lib/theme';
import ToggleContextProvider from 'components/state/context/toggle-context';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <ToggleContextProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ToggleContextProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
