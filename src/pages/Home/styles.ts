import styled from "styled-components";

export const HomeContainer = styled.main``;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  margin-top: 6.5rem;
  background: url("src/assets/background.svg");
  padding-bottom: 6.75rem;
  img {
    margin-top: 5.75rem;
    margin-right: 10rem;
  }
`;

export const HeaderContent = styled.article`
  width: 36.75rem;
  margin-left: 10rem;
  margin-top: 5.875rem;
`;

export const HomeTitles = styled.article`
  strong {
    font-size: 3rem;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-title"]};
  }
  p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const DeliveryDetails = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  margin-top: 4.125rem;

  max-height: 5.25rem;
  span {
    display: flex;
    flex-direction: row;

    gap: 0.75rem;

    p {
      color: ${(props) => props.theme["base-text"]};
    }
    i {
      svg {
        padding: 0.5rem;
        border-radius: 9999px;
        background: blue;
      }
    }
    :nth-child(1) {
      svg {
        background: ${(props) => props.theme["yellow-dark"]};
      }
    }
    :nth-child(2) {
      svg {
        background: ${(props) => props.theme["base-text"]};
      }
    }
    :nth-child(3) {
      svg {
        background: ${(props) => props.theme.yellow};
      }
    }
    :nth-child(4) {
      svg {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`;

export const CoffeList = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: auto;
  padding-right: auto;
  > div {
    max-width: 70rem;
    margin-right: 10rem;
    margin-left: 10rem;

    display: flex;
    flex-direction: column;

    > strong {
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 2rem;
      margin-top: 2rem;
      margin-bottom: 2.125rem;
    }
  }
`;

export const CoffeCards = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  img {
    margin-top: -3rem;
  }

  :last-child {
    margin-bottom: 9.8rem;
  }
`;
