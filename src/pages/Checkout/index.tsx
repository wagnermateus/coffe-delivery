import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { ConfirmOrderCard } from "./components/ConfirmOrderCard";

import {
  AddressInputContent,
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

import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContexts";
import { useNavigate } from "react-router-dom";

const orderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP !"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.number().min(1, "Informe o número da rua !"),
  neighborhood: zod.string().min(1, "Informe o bairro!"),
  city: zod.string().min(1, "Informe a sua cidade!"),
  complement: zod.string().optional(),
  paymentMethod: zod.string(),
  uf: zod.string().min(1, "Insira o UF").max(2, "Insira o UF correto"),
});

export type orderFormData = zod.infer<typeof orderFormValidationSchema>;

export function Checkout() {
  const orderForm = useForm<orderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: undefined,
      neighborhood: "",
      city: "",
      complement: "",
      uf: "",
    },
  });

  const { handleNewOrder, resetCart } = useContext(OrderContext);

  const { handleSubmit, reset, register } = orderForm;

  const navigate = useNavigate();

  function handleCreateNewOrder(data: orderFormData) {
    handleNewOrder(data);
    reset();
    resetCart();
    return navigate("/success");
  }
  return (
    <CheckoutContainer>
      <OrderCardForm onSubmit={handleSubmit(handleCreateNewOrder)}>
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
              <AddressInputContent>
                <CEPInput
                  type="text"
                  placeholder="CEP"
                  id="cep"
                  {...register("cep")}
                  required
                />
              </AddressInputContent>
              <AddressInputContent>
                <StreetInput
                  type="text"
                  placeholder="Rua"
                  id="street"
                  {...register("street")}
                  required
                />
              </AddressInputContent>
              <AddressInputContent>
                <NumberInput
                  type="number"
                  placeholder="Número"
                  id="number"
                  {...register("number", { valueAsNumber: true })}
                  required
                />
                <ComplementInput
                  type="text"
                  placeholder="Complemento"
                  id="complement"
                  {...register("complement")}
                />
              </AddressInputContent>
              <AddressInputContent>
                <NeighborhoodInput
                  type="text"
                  placeholder="Bairro"
                  id="neighborhood"
                  {...register("neighborhood")}
                  required
                />
                <CityInput
                  type="text"
                  placeholder="Cidade"
                  id="city"
                  {...register("city")}
                  required
                />
                <UFInput
                  type="text"
                  placeholder="UF"
                  id="uf"
                  {...register("uf")}
                  required
                />
              </AddressInputContent>
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
                  value="Cartão De Crédito"
                  {...register("paymentMethod")}
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
                  value="Cartão De Débito"
                  {...register("paymentMethod")}
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
                  value="Dinheiro"
                  {...register("paymentMethod")}
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
