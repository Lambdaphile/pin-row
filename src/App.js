import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import _ from "lodash";

import Row from "./components/Row";
import SwitchButton from "./components/SwitchButton";

import { themes } from "../theme";

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    background-color: ${(props) => props.theme.bgGray300};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    height: 100%;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeSwitch = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const rows = _.times(3, (index) => <Row key={index}>Puck {index + 1}</Row>);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      {rows}
      <SwitchButton onThemeSwitch={handleThemeSwitch} />
    </ThemeProvider>
  );
}
