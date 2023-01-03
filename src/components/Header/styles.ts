import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 35px 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    gap: 0.75rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 0.25rem;
  border-radius: 8px;
  line-height: 130%;
  font-size: 0.875rem;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme["purple-light"]};

  span {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
