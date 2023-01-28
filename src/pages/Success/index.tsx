import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  CurrencyIconContainer,
  MapIconContainer,
  OrderInfoContainer,
  OrderInfoContent,
  OrderInfoDetails,
  SuccessContainer,
  SuccessContent,
  TimerIconContainer,
  TitleContent,
} from "./styles";
import delivery from "../../assets/delivery.svg";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../contexts/OrderContexts";

export function Success() {
  const { formData } = useContext(OrderContext);

  return (
    <SuccessContainer>
      <TitleContent>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </TitleContent>
      <SuccessContent>
        <OrderInfoContainer>
          <OrderInfoContent>
            <MapIconContainer>
              <MapPin size={16} color="#fcfcfc" weight="fill" />
            </MapIconContainer>
            <p>
              Entrega em <b>{formData.street + ", " + formData.number}</b>{" "}
              <br />
              {formData.neighborhood} - {formData.city}, {formData.uf}
            </p>
          </OrderInfoContent>
          <OrderInfoContent>
            <TimerIconContainer>
              <Timer size={32} color="#fcfcfc" weight="fill" />
            </TimerIconContainer>
            <OrderInfoDetails>
              <span>Previsão de entrega</span>
              <b>20 min - 30 min</b>
            </OrderInfoDetails>
          </OrderInfoContent>
          <OrderInfoContent>
            <CurrencyIconContainer>
              <CurrencyDollar size={22} color="#fcfcfc" />
            </CurrencyIconContainer>
            <OrderInfoDetails>
              <span>Pagamento na entrega</span>
              <b>{formData.paymentMethod}</b>
            </OrderInfoDetails>
          </OrderInfoContent>
        </OrderInfoContainer>

        <img src={delivery} alt="Motoqueiro levando a entrega" />
      </SuccessContent>
    </SuccessContainer>
  );
}
