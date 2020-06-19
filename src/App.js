import React from "react";

// import dark from "./styles/themes/dark";
// import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import * as S from "./styles/styled";

import Author from "./components/Author/index";
import Navigation from "./components/Navigation/index";
import Layout from "./components/Layout/index";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <Author />
        {/* <Navigation /> */}
        <Layout />
      </S.Wrapper>
    </>
  );
};

export default App;
