import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.25rem;
  flex-direction: column;
  border-radius: 6px 36px;
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme["base-card"]};

  img {
    position: absolute;
    top: -1.125rem;
  }

  div.tags {
    display: flex;
    gap: 4px;
  }

  div.control {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export const CoffeeTitle = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: 700;
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const CoffeeDescription = styled.p`
  color: ${(props) => props.theme["base-label"]};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
`;

export const CoffeePrice = styled.p`
  font-family: "Baloo 2", sans-serif;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 800;
  small {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    text-align: right;
  }
`;

export const Tag = styled.div`
  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-light"]};
  font-family: "Roboto";
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  padding: 4px 8px;
  border-radius: 8px;
`;
