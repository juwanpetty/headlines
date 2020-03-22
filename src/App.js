import React from "react";
import { Header, Sidebar, Content, Footer } from "./components/Layout/index";
import { Container } from "./App.styles";

export const App = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </Container>
  );
};

export default App;
