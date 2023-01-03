import styled from "styled-components";

export const PresentationContainer = styled.div`
  padding: 0 10rem;

  height: 544px;
  display: flex;
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

  h1 {
    max-width: 588px;
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
  }
`;
