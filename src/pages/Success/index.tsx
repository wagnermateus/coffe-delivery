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

export function Success() {
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
              Entrega em Rua João Daniel Martinelli, 102Farrapos - Porto Alegre,
              RS
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
              <b>Cartão de Crédito</b>
            </OrderInfoDetails>
          </OrderInfoContent>
        </OrderInfoContainer>

        <img src={delivery} alt="Motoqueiro levando a entrega" />
      </SuccessContent>
    </SuccessContainer>
  );
}
