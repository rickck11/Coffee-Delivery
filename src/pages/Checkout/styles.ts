import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem;

  h3 {
    font-family: "Baloo 2";
    font-style: normal;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }

  display: flex;
  gap: 32px;

  section {
    flex: 1;
  }
  aside {
    width: 448px;
  }
`;

interface ContainerInformationsProps {
  iconColor: "yellow-dark" | "purple-dark";
}
export const ContainerInformations = styled.div<ContainerInformationsProps>`
  color: ${(props) => props.theme[props.iconColor]};
  display: flex;
  gap: 5px;

  span {
    display: flex;
    flex-direction: column;
    gap: 2px;
    strong {
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 400;
    }

    p {
      font-size: 14px;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  form {
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

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px;
  gap: 32px;
`;

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`;

export const ButtonPayment = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-button"]};
  font-size: 12px;
  line-height: 160%;
  color: ${(props) => props.theme["purple-dark"]};
  p {
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

// Coffee List

export const CoffeeContainer = styled.div`
  width: 100%;
  max-height: 500px;
  border-radius: 6px 44px;
  margin-top: 16px;
  padding: 48px 44px;
  background-color: ${(props) => props.theme["base-card"]};

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

export const Separator = styled.hr`
  margin: 24px 0;
  color: transparent;
  border: none;
  border-top: 1px solid ${(props) => props.theme["base-button"]};
`;

export const ConfirmPayment = styled.div`
  display: flex;
  flex-direction: column;
  p,
  strong {
    display: flex;
    margin-bottom: 12px;
    justify-content: space-between;
    align-items: center;
  }
  button {
    padding: 0.75rem;
    border-radius: 8px;
    margin-top: 12px;
    border: none;
    background-color: ${(props) => props.theme.yellow};
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme.white};

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
