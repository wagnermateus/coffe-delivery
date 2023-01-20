import { IconContext } from "phosphor-react";
import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  margin-top: 6.55rem; ;
`;
export const TitleContent = styled.div`
  width: 70rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
  }
  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const SuccessContent = styled.div`
  width: 70rem;
  display: flex;
  gap: 6.375rem;

  img {
    width: 30.75rem;
    height: 18.3125rem;
  }
`;
export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  width: 32.875rem;
  height: 16.875rem;

  padding: 2.5rem;
  border: 1px solid transparent;
  border-image: linear-gradient(to right, #dbac2c, #8047f8) 1;

  border-radius: 6px 36px;
`;
export const OrderInfoContent = styled.div`
  display: flex;
  gap: 0.75rem;
`;
export const OrderInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
`;
const IconBase = styled.i`
  svg {
    width: 32px;
    height: 32px;
    padding: 0.5rem;
    border-radius: 9999px;
  }
`;
export const MapIconContainer = styled(IconBase)`
  svg {
    background: ${(props) => props.theme.purple};
  }
`;
export const CurrencyIconContainer = styled(IconBase)`
  svg {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
export const TimerIconContainer = styled(IconBase)`
  svg {
    background: ${(props) => props.theme.yellow};
  }
`;
