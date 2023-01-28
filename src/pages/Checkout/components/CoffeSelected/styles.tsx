import styled, { ThemeConsumer } from "styled-components";

export const CoffeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;
  max-height: 14rem;
`;

export const CoffeSelectedContent = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
  }
`;

export const Datails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-left: 1.25rem;
  margin-right: 3.125rem;
`;
export const DetailsButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    border: none;
    background: ${(props) => props.theme["base-button"]};

    svg {
      color: ${(props) => props.theme["purple"]};
      transition: all 0.3s;
    }

    :hover {
      svg {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }
`;

export const QuantityButtons = styled.div`
  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  width: 4.5rem;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  color: ${(props) => props.theme["base-title"]};
  border-radius: 6px;
`;
export const ButtonRemove = styled.button`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};
`;

export const CoffeName = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  line-height: 1.6;
`;

export const Price = styled.b`
  color: ${(props) => props.theme["base-text"]};
`;
