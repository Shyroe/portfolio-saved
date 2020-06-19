import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
  *,::before,::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;

    ${media.lessThan("medium")`
      font-size: 80%;
    `}

    ${media.lessThan("small")`
      font-size: 65%;
    `}
  }

  body {
    background-color: lightblue;
  }


`;

export default GlobalStyle;
