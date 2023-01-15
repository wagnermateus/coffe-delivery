import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  background: ${(props) => props.theme["base-card"]};

  strong {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 1rem;
  }
  p {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    width: 13.5rem;
  }
`;

export const CardTags = styled.div`
  display: flex;
  gap: 0.25rem;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${(props) => props.theme["yellow-dark"]};

  span {
    margin-top: 0.75rem;
    border-radius: 100px;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    background-color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const CardFooter = styled.div`
  width: 13rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  button {
    border: none;
  }
`;

export const QuantityButtons = styled.div`
  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  width: 4.5rem;
  text-align: center;
  display: flex;
  gap: 0.25rem;
  margin-right: 0.5rem;
  margin-left: 1.4rem;
  border-radius: 6px;

  button {
    background: transparent;

    svg {
      color: ${(props) => props.theme["purple"]};
      transition: all 0.3s;
    }
    :nth-child(1) {
      :hover {
        svg {
          color: ${(props) => props.theme["purple-dark"]};
        }
      }
    }
    :nth-child(3) {
      :hover {
        svg {
          color: ${(props) => props.theme["purple-dark"]};
        }
      }
    }
  }
`;
export const Price = styled.div`
  color: ${(props) => props.theme["base-text"]};

  b {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    line-height: 1.6;
    font-size: 1.5rem;
  }
  span {
    font-size: 0.875rem;
  }
`;
export const ButtonAddToCart = styled.button`
  background: ${(props) => props.theme["purple-dark"]};
  width: 2.375rem;
  border-radius: 6px;
  transition: all 0.3s;

  :hover {
    background: ${(props) => props.theme["purple"]};
  }
`;
