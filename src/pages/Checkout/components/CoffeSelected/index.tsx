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
  const { coffeDetails } = useContext(OrderContext);
  return (
    <CoffeSelectedContainer>
      <CoffeSelectedContent>
        <img src={coffeDetails[1].imageUrl} />
        <Datails>
          <CoffeName>{coffeDetails[1].name}</CoffeName>
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
            <ButtonRemove type="button">
              <Trash size={16} />
              REMOVER
            </ButtonRemove>
          </DetailsButtons>
        </Datails>
        <Price>
          {coffeDetails[1].price}
          {"kzs"}
        </Price>
      </CoffeSelectedContent>

      <CoffeSelectedContent>
        <img src={coffeDetails[2].imageUrl} />
        <Datails>
          <CoffeName>{coffeDetails[2].name}</CoffeName>
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
            <ButtonRemove type="button">
              <Trash size={16} />
              REMOVER
            </ButtonRemove>
          </DetailsButtons>
        </Datails>
        <Price>
          {coffeDetails[2].price}
          {"kzs"}
        </Price>
      </CoffeSelectedContent>
    </CoffeSelectedContainer>
  );
}
