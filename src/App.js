import React from "react";
import {
  Header,
  Sidebar,
  SidebarModal,
  Content,
  Footer,
} from "./components/Layout/index";
import { Container } from "./App.styles";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { color, typography } from "./constants/styles";
import { useSelector } from "react-redux";
import { uiSelector } from "./store/slices/ui";

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    font-size: 62.5%;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.gray6};
    font-family: ${typography.family.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const App = () => {
  const { theme } = useSelector(uiSelector);

  const lightTheme = color.light;
  const darkTheme = color.dark;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        {/* <Sidebar /> */}
        <SidebarModal />
        <Content />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
