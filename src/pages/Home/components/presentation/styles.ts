import styled from "styled-components";

export const PresentationContainer = styled.div`
  padding: 5.75rem 10rem;

  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: flex-start;
  background: linear-gradient(
      0deg,
      rgba(250, 250, 250, 1) 7%,
      rgba(9, 9, 121, 0) 35%,
      rgba(255, 255, 255, 0) 59%,
      rgba(250, 250, 250, 1) 95%
    ),
    url(/src/assets/Background.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  section {
    max-width: 580px;

    h1 {
      line-height: 130%;
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 3rem;
      color: ${(props) => props.theme["base-title"]};
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 400;
      margin-bottom: 4.125rem;
    }
  }
  aside {
    img {
      min-width: 300px;
      width: 100%;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  gap: 2.5rem;

  div.item-group {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export interface ItemProps {
  bgColor: "yellow" | "yellow-dark" | "purple" | "base-text";
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 0.75rem;
  flex-wrap: wrap;
  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme[props.bgColor]};
  }
`;
