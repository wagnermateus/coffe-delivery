import styled from "styled-components";
export const ConfirmOrderCardContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;

  background: ${(props) => props.theme["base-card"]};
`;

export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const ConfirmOrderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  line-height: 1.6;
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    :nth-child(2) {
      font-size: 1rem;
    }
  }
  strong {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const ConfirmButton = styled.button`
  height: 2.875rem;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  transition: all 0.3s;

  & :not(:disabled):hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
