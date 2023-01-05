import styled from "styled-components";

export const CoffeeMenuContaier = styled.div`
  padding: 2rem 10rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.375rem;
  }
`;

export const CoffeeCards = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
