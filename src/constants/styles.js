import { createGlobalStyle } from "styled-components";

export const color = {
  // palette
  primary: "#007aff",
  red: "#ea4335",

  light: {
    black: "#252525", // 414141
    gray9: "#424242", // 5e5e5e
    gray8: "#828282", // b7b7b7
    gray7: "#ededed",
    gray6: "#fafafa",
    white: "#ffffff",
    theme: "light",
  },
  dark: {
    black: "#EEEEEE",
    gray9: "#F5F5F5",
    gray8: "#828282",
    gray7: "#555555",
    gray6: "#252525",
    white: "#424242",
    theme: "dark",
  },
};

export const spacing = {
  padding: {
    xsmall: 8,
    small: 12,
    xmedium: 16,
    medium: 24,
    large: 40,
    xlarge: 60,
  },
  borderRadius: {
    xsmall: 1,
    small: 3,
  },
};
export const typography = {
  family: {
    primary: `-apple-system, BlinkMacSystemFont, 'Inter', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
    code: `"Fira Code", monospace`,
  },
  weight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  size: {
    s1: 1.2,
    s2: 1.4,
    m1: 1.6,
    m2: 2.1,
    l1: 3.2,
    l2: 4.0,
    l3: 4.8,
    xl1: 8,
  },
};

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
    color: ${color.black};
    font-family: ${typography.family.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
