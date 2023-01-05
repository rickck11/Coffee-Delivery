import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding: 2.5rem 10rem;
  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
  }
  h3 {
    font-size: 1.25rem;
    margin-top: 4px;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  div#informations {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 40px;
    gap: 32px;
    width: 526px;
    height: 270px;
    border-radius: 6px 36px;
    border: 1px solid transparent;
    background: linear-gradient(
        to right,
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      ),
      linear-gradient(to right, #dbac2c, #8047f8);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }
  span {
    display: flex;
    gap: 12px;
  }
`;

interface IconProps {
  bgColor: "yellow" | "purple" | "yellow-dark";
}
export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme[props.bgColor]};
`;
export const DeliveryInformations = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;
