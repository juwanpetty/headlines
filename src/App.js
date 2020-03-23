import React from "react";
import { Header, Sidebar, Content, Footer } from "./components/Layout/index";
import { Container } from "./App.styles";
import { GlobalStyle } from "./constants/styles";

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default App;
