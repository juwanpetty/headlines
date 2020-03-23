import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
  }
`;

export const color = {
  // palette
  primary: "#007aff",

  // monochrome
  black: "#414141",
  gray9: "#5e5e5e",
  gray8: "#b7b7b7",
  gray7: "#ededed",
  gray6: "#fafafa"
};

export const spacing = {
  padding: {
    xsmall: 8,
    small: 12,
    medium: 24,
    large: 40,
    xlarge: 60
  },
  borderRadius: {
    xsmall: 1,
    small: 3
  }
};
export const typography = {
  family: {
    primary: `-apple-system, "Inter", "BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    code: `"Fira Code", monospace`
  },
  weight: {
    regular: "400",
    medium: "500",
    bold: "700"
  },
  size: {
    s1: 1.2,
    s2: 1.4,
    m1: 1.6,
    m2: 2.1,
    l1: 3.2,
    l2: 4.8,
    l3: 6.4,
    xl1: 8
  }
};
