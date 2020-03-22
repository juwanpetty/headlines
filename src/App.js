import React from "react";
import { Header, Sidebar, Main, Footer } from "./components/Layout/index";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
