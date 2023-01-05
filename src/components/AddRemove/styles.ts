import styled from "styled-components";

interface AddRemoveProps {
  h?: number;
}

export const AddRemoveContainer = styled.div<AddRemoveProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 4.5rem;
  height: ${(props) => {
    if (props.h) {
      return props.h / 16 + "rem";
    }
    return "2.375rem";
  }};
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-button"]};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.purple};
    border: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
