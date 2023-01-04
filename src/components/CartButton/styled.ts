import styled from "styled-components";

export interface CartButtonContainerProps {
  color: "yellow" | "purple";
}

enum CartColor {
  yellow = "yellow-dark",
  purple = "base-card",
}
enum CartBackground {
  yellow = "yellow-light",
  purple = "purple-dark",
}

export const CartButtonContainer = styled.div<CartButtonContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme[CartColor[props.color]]};
  background-color: ${(props) => props.theme[CartBackground[props.color]]};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Notify = styled.div<CartButtonContainerProps>`
  position: absolute;
  top: -8px;
  right: -8.35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[CartColor[props.color]]};
  color: ${(props) => props.theme["base-card"]};
`;
