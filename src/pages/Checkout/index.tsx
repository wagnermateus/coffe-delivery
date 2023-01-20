import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { ConfirmOrderCard } from "./components/ConfirmOrderCard";

import {
  CEPInput,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  ConfirmOrder,
  InputContainer,
  InputContent,
  NeighborhoodInput,
  NumberInput,
  OrderCardForm,
  OrderFormInputs,
  PaymentMethodContainer,
  StreetInput,
  SubTitles,
  UFInput,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderCardForm>
        <OrderFormInputs>
          <SubTitles>Complete o seu pedido</SubTitles>
          <div>
            <header>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido.</p>
              </div>
            </header>
            <div>
              <div>
                <CEPInput type="text" placeholder="CEP" required />
              </div>
              <div>
                <StreetInput type="text" placeholder="Rua" required />
              </div>
              <div>
                <NumberInput type="number" placeholder="Número" required />
                <ComplementInput type="text" placeholder="Complemento" />
              </div>
              <div>
                <NeighborhoodInput type="text" placeholder="Bairro" required />
                <CityInput type="text" placeholder="Cidade" required />
                <UFInput type="text" placeholder="UF" required />
              </div>
            </div>
          </div>

          <fieldset>
            <div>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <span> Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <PaymentMethodContainer>
              <InputContainer>
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="cartao de credito"
                />
                <InputContent>
                  <CreditCard size={16} color="#8047F8" />
                  <label htmlFor="creditCard">CARTÃO DE CRÉDITO</label>
                </InputContent>
              </InputContainer>
              <InputContainer>
                <input
                  type="radio"
                  id="debitCard"
                  name="paymentMethod"
                  value="cartao de debito"
                />

                <InputContent>
                  <Bank size={16} color="#8047F8" />
                  <label htmlFor="debitCard">CARTÃO DE DÉBITO</label>
                </InputContent>
              </InputContainer>
              <InputContainer>
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="dinheiro"
                />
                <InputContent>
                  <Money size={16} color="#8047F8" />

                  <label htmlFor="cash">DINHEIRO</label>
                </InputContent>
              </InputContainer>
            </PaymentMethodContainer>
          </fieldset>
        </OrderFormInputs>

        <ConfirmOrder>
          <SubTitles>Cafés selecionados</SubTitles>
          <ConfirmOrderCard />
        </ConfirmOrder>
      </OrderCardForm>
    </CheckoutContainer>
  );
}
