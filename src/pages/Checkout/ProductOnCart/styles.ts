import styled from "styled-components";

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.purple};
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 8px;
  border-radius: 8px;
  gap: 4px;
  height: 32px;

  p {
    font-size: 12px;
    color: ${(props) => props.theme["base-text"]};
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ProducOnCartContainer = styled.div`
  div.coffee-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    img {
      width: 64px;
      height: 64px;
    }
    div.coffee-options {
      display: flex;
      flex-direction: column;
    }
    div.coffee-options-buttons {
      margin-top: 8px;
      display: flex;
      gap: 8px;
    }
  }
`;

export const Separator = styled.hr`
  margin: 24px 0;
  color: transparent;
  border: none;
  border-top: 1px solid ${(props) => props.theme["base-button"]};
`;
