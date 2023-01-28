import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 2rem 0 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: fixed;

  background: ${(props) => props.theme.background};

  nav {
    display: flex;
    justify-content: space-between;
    width: 70rem;

    img:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 1167px) {
    padding: 2rem 2rem;
  }
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: row;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  > span {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${(props) => props.theme["purple-dark"]};

    background: ${(props) => props.theme["purple-light"]};

    padding: 0.5rem;

    border-radius: 8px;
  }
  @media (max-width: 400px) {
    span {
      font-size: 0.7rem;
    }
    svg {
      width: 1rem;
    }
  }
`;

export const CartContainer = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    border: none;
    border-radius: 8px;
    height: 2.375rem;
    padding: 0.5rem;
    text-decoration: none;
    background: ${(props) => props.theme["yellow-light"]};
  }
`;
