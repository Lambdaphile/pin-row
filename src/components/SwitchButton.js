import React, { useState } from "react";
import styled from "styled-components";

const StyledSwitchButton = styled.div`
  align-items: center;
  background-color: palevioletred;
  border-radius: 3rem;
  color: ${(props) => props.theme.color};
  display: flex;
  font-size: 1.4rem;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 1.4rem;
  width: 8rem;

  span {
    border-radius: 3rem;
    cursor: pointer;
    padding: 0.4rem;

    &:hover {
      background: #f7fafc;
    }
  }
`;

export const SwitchButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function SwitchButton({ onThemeSwitch }) {
  const [isSelected, setisSelected] = useState("light");

  const handleOnClick = (theme) => {
    setisSelected(theme);
    onThemeSwitch(theme);
  };

  return (
    <SwitchButtonWrapper>
      <StyledSwitchButton isSelected={isSelected === "light"}>
        <span
          role="img"
          aria-label="light-theme"
          onClick={() => handleOnClick("light")}
        >
          💅
        </span>
        :
        <span
          role="img"
          aria-label="dark-theme"
          onClick={() => handleOnClick("dark")}
        >
          💅🏿
        </span>
      </StyledSwitchButton>
    </SwitchButtonWrapper>
  );
}
