import { CoffeSelected } from "../CoffeSelected";
import {
  ConfirmButton,
  ConfirmOrder,
  ConfirmOrderCardContainer,
  ConfirmOrderContent,
} from "./styles";

export function ConfirmOrderCard() {
  return (
    <ConfirmOrderCardContainer>
      <CoffeSelected />
      <ConfirmOrder>
        <ConfirmOrderContent>
          <span>Total de itens</span>
          <span>29.70 kzs</span>
        </ConfirmOrderContent>
        <ConfirmOrderContent>
          <span>Entrega</span>
          <span>3.50 kzs</span>
        </ConfirmOrderContent>
        <ConfirmOrderContent>
          <strong>Total</strong>
          <strong>33.20 kzs</strong>
        </ConfirmOrderContent>
      </ConfirmOrder>
      <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
    </ConfirmOrderCardContainer>
  );
}
