import styled from "styled-components";

export const AddRemoveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 4.5rem;
  height: 38px;
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
