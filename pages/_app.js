import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/default";
import Layout from "../components/Layout/main";
import GlobalStyles from "../styles/globals";
import Toggle from "../components/Toggle";
import { useDarkMode } from "../hooks/useDarkMode";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
