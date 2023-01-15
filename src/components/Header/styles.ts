import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 2rem 10rem;
  display: flex;
  justify-content: center;

  position: fixed;

  background: ${(props) => props.theme.background};

  nav {
    display: flex;
    justify-content: space-between;
    width: 70rem;
  }
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: row;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    flex-direction: row;

    color: ${(props) => props.theme["purple-dark"]};

    background: ${(props) => props.theme["purple-light"]};

    padding: 0.5rem;

    border-radius: 8px;
  }

  > button {
    border: none;
    border-radius: 8px;
    height: 2.375rem;
    padding: 0.5rem;

    background: ${(props) => props.theme["yellow-light"]};
  }
`;
