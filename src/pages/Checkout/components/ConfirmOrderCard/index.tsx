import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContexts";
import { CoffeSelected } from "../CoffeSelected";
import {
  ConfirmButton,
  ConfirmOrder,
  ConfirmOrderCardContainer,
  ConfirmOrderContent,
} from "./styles";

export function ConfirmOrderCard() {
  const { orderCoffes } = useContext(OrderContext);
  const [totalAmountPayable, setTotalAmountPayable] = useState(0);
  let deliveryPrice = 3.5;

  const [totalItemCost, setTotalItemCost] = useState(0);

  function calculateTheTotalAmountPayable() {
    setTotalAmountPayable(totalItemCost + deliveryPrice);
  }

  useEffect(() => {
    let qtd = 0;
    orderCoffes.map((coffe) => {
      qtd += coffe.totalPayable;
    });
    setTotalItemCost(qtd);
    calculateTheTotalAmountPayable();
  }, [orderCoffes, totalItemCost]);

  return (
    <ConfirmOrderCardContainer>
      <CoffeSelected />
      <ConfirmOrder>
        <ConfirmOrderContent>
          <span>Total de itens</span>
          <span>{totalItemCost.toFixed(2)} kzs</span>
        </ConfirmOrderContent>
        <ConfirmOrderContent>
          <span>Entrega</span>
          <span>{deliveryPrice} kzs</span>
        </ConfirmOrderContent>
        <ConfirmOrderContent>
          <strong>Total</strong>
          <strong>{totalAmountPayable.toFixed(2)}kzs</strong>
        </ConfirmOrderContent>
      </ConfirmOrder>
      <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
    </ConfirmOrderCardContainer>
  );
}
