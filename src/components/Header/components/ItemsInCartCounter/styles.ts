import styled from "styled-components";

export const CounterContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme["yellow-dark"]};
  border-radius: 1000px;
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.75rem;

  font-weight: bold;

  position: absolute;
  margin-top: -2.5rem;
  margin-right: -2rem;
  color: ${(props) => props.theme.white};
`;
