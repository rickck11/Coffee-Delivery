import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  div#inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
      width: 200px;
      height: 42px;
      padding: 12px;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme["base-button"]};
      background: ${(props) => props.theme["base-input"]};

      &::placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: ${(props) => props.theme["base-label"]};
      }
    }

    input.input-large {
      width: 100%;
    }

    div.input-group {
      display: flex;
      gap: 12px;

      input:nth-child(1) {
        width: 200px;
      }
      input:nth-child(2) {
        width: 100%;
      }
      input:nth-child(3) {
        width: 60px;
      }
    }
  }
`;
