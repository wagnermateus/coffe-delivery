import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 6.5rem;
  height: calc(100vh - 6.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2.5rem;
`;
export const SubTitles = styled.strong`
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme["base-subtitle"]};
`;
export const OrderCardForm = styled.form`
  max-width: 70rem;
  display: grid;
  grid-template-columns: 40rem 28rem;
  column-gap: 2rem;

  @media (max-width: 1430px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

export const OrderFormInputs = styled.div`
  width: 100%;
  height: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-subtitle"]};

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
  > div {
    background: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 10px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    line-height: 1.6;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;

    > div {
      display: flex;
      gap: 0.5rem;

      span {
        color: ${(props) => props.theme["base-subtitle"]};
      }
      p {
        color: ${(props) => props.theme["base-text"]};
        font-size: 0.875rem;
      }
    }
  }
`;

export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const InputBase = styled.input`
  height: 2.625rem;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme["base-input"]};
`;

export const CEPInput = styled(InputBase)`
  width: 12.5rem;
`;

export const StreetInput = styled(InputBase)`
  width: 100%;
`;
export const NumberInput = styled(InputBase)`
  width: 12.5rem;
`;
export const ComplementInput = styled(InputBase)`
  width: 21.75rem;
  margin-left: 0.75rem;
`;
export const NeighborhoodInput = styled(InputBase)`
  width: 12.5rem;
`;
export const CityInput = styled(InputBase)`
  width: 17.25rem;
  margin-left: 0.75rem;
`;
export const UFInput = styled(InputBase)`
  width: 3.75rem;
  margin-left: 0.75rem;
`;

export const PaymentMethodContainer = styled.div``;

export const InputContainer = styled.div`
  position: relative;
  width: 11.166rem;
  height: 3.1rem;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};
  input {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    z-index: 2;
    opacity: 0;

    :checked + div {
      background: ${(props) => props.theme["purple-light"]};
    }
  }
`;

export const InputContent = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  gap: 0.75rem;
  height: 100%;
  transition: all 300ms;
  border-radius: 6px;
  label {
    font-size: 0.75rem;
  }
`;
