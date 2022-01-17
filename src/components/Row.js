import React, { useState } from "react";
import { FaThumbtack, FaCaretRight } from "react-icons/fa";
import { Name, StyledRow, Pin, PinTrigger } from "./Row.styles";

export default function Row(props) {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsPinned(!isPinned);
  };

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledRow>
      <Pin
        {...{
          isPinned,
          isHovered
        }}
      >
        <PinTrigger
          {...{
            onClick: handleClick,
            onMouseEnter: handleOnMouseEnter,
            onMouseLeave: handleOnMouseLeave
          }}
        />
        {(isHovered || isPinned) && <FaThumbtack />}
      </Pin>
      <Name>
        <FaCaretRight />
        {props.children}
      </Name>
    </StyledRow>
  );
}
