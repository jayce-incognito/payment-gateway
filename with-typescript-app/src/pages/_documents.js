import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
      src: url('/static/fonts/Roboto-Regular.ttf');
      src: url('/static/fonts/Roboto-Bold.ttf');
      src: url('/static/fonts/Roboto-Black.ttf');
      src: url('/static/fonts/Roboto-Medium.ttf');
      src: url('/static/fonts/Roboto-Light.ttf');
      src: url('/static/fonts/Roboto-Thin.ttf');
  }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
