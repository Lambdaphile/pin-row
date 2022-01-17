import styled from "styled-components";

export const StyledRow = styled.tbody`
  align-items: center;
  background-color: ${(props) => props.theme.bgGray000};
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  cursor: pointer;
  display: flex;
  height: 8rem;
  margin: 0 auto;
  margin-top: -0.1rem;
  position: relative;
  width: 60rem;
`;

export const Pin = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.isPinned ? props.theme.bgGray200 : props.theme.bgGray100};
  border-right: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.color};
  cursor: pointer;
  display: flex;
  height: 100%;
  font-size: 1.4rem;
  justify-content: center;
  transition: width 0.2s;
  width: ${(props) => (props.isPinned || props.isHovered ? 8 : 2)}rem;

  &:hover {
    width: 8rem;
  }
`;

export const PinTrigger = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 8rem;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.color};
  font-size: 3.2rem;
  padding: 0 2rem;
`;
