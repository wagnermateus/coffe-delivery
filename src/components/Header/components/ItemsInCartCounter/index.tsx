import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContexts";
import { CounterContainer } from "./styles";

export function ItemsInCartCounter() {
  const { orderCoffes } = useContext(OrderContext);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let qtd = 0;
    orderCoffes.map((coffe) => (qtd += coffe.quantity));
    setCounter(qtd);
  }, [orderCoffes]);

  return <CounterContainer>{counter}</CounterContainer>;
}
