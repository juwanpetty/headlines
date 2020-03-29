import React, { useState } from "react";
import { Header, Sidebar, Content, Footer } from "./components/Layout/index";
import { Container } from "./App.styles";
import { GlobalStyle } from "./constants/styles";

export const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header onSetSidebarVisible={setSidebarVisible} />
        <Sidebar
          onSetSidebarVisible={setSidebarVisible}
          visible={sidebarVisible}
        />
        <Content />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default App;
