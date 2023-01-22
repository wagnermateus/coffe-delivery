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
                  <span>1</span>
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
