import React from 'react';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    cursor: default;
    font-size: 21px;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: #222129;
  }
    `;

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    window.scroll({ top: 0 });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>React</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
