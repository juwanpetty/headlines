import React from "react";
import { Header, Sidebar, Content, Footer } from "./components/Layout/index";
import { Container } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, color } from "./constants/styles";
import { useSelector } from "react-redux";
import { uiSelector } from "./store/slices/ui";

export const App = () => {
  const { theme } = useSelector(uiSelector);

  const lightTheme = color.light;
  const darkTheme = color.dark;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
