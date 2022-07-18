import GlobalStyle from "../components.styled/globalStyles";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
