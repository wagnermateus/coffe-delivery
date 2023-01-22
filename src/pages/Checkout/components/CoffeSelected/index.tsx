import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContexts";

import { Minus, Plus, Trash } from "phosphor-react";
import {
  ButtonRemove,
  CoffeName,
  CoffeSelectedContainer,
  CoffeSelectedContent,
  Datails,
  DetailsButtons,
  Price,
  QuantityButtons,
} from "./styles";

export function CoffeSelected() {
  const { orderCoffes, removeCoffeFromCart } = useContext(OrderContext);

  /*  function increaseTheAmountOfCoffe() {
    setCoffeAmount((state) => {
      while (state < 50) {
        return state + 1;
      }
      return state;
    });
  }
  function reduceTheAmountOfCoffe() {
    setCoffeAmount((state) => {
      while (state > 1) {
        return state - 1;
      }
      return 1;
    });
  }*/
  return (
    <CoffeSelectedContainer>
      {orderCoffes.map((orderCoffe) => {
        return (
          <CoffeSelectedContent>
            <img src={orderCoffe.imageUrl} />
            <Datails>
              <CoffeName>{orderCoffe.name}</CoffeName>
              <DetailsButtons>
                <QuantityButtons>
                  <button type="button">
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>{orderCoffe.quantity}</span>
                  <button type="button">
                    <Plus size={14} weight="bold" />
                  </button>
                </QuantityButtons>
                <ButtonRemove
                  type="button"
                  onClick={() => removeCoffeFromCart(orderCoffe.name)}
                >
                  <Trash size={16} />
                  REMOVER
                </ButtonRemove>
              </DetailsButtons>
            </Datails>
            <Price>
              {orderCoffe.price}
              {"kzs"}
            </Price>
          </CoffeSelectedContent>
        );
      })}
    </CoffeSelectedContainer>
  );
}
