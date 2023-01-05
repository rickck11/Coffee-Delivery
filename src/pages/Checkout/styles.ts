import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem;

  form {
    display: flex;
    gap: 32px;
    width: 100%;
  }

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

interface PaymentOptionsContainerProps {
  paymentMode: number;
}

export const PaymentOptionsContainer = styled.div<PaymentOptionsContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  button:nth-child(${(props) => (props.paymentMode ? props.paymentMode : 0)}) {
    background-color: ${(props) => props.theme["purple-light"]};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme["purple-dark"]};
  }
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
  border-radius: 6px 44px;
  margin-top: 16px;
  padding: 48px 44px;
  background-color: ${(props) => props.theme["base-card"]};
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

    &:disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme["base-subtitle"]};
      opacity: 0.3;
    }
  }
`;
