import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import {
  ButtonAddToCart,
  CardFooter,
  CardTags,
  CoffeCardContainer,
  Price,
  QuantityButtons,
} from "./styles";

import { v4 as uuidv4 } from "uuid";
import { CoffeProps } from "../../../../contexts/OrderContexts";

export function CoffeCard({
  id,
  name,
  description,
  imageUrl,
  price,
  type,
}: CoffeProps) {
  return (
    <CoffeCardContainer>
      <img src={imageUrl} alt="Chavena com café" />
      <CardTags>
        {type.map((value) => {
          return <span key={uuidv4()}>{value}</span>;
        })}
      </CardTags>
      <strong>{name}</strong>
      <p>{description}</p>
      <CardFooter>
        <Price>
          <b>{price}</b>
          <span>kzs</span>
        </Price>
        <QuantityButtons>
          <button type="button">
            <Minus size={14} weight="bold" />
          </button>
          <span>1</span>
          <button type="button">
            <Plus size={14} weight="bold" />
          </button>
        </QuantityButtons>
        <ButtonAddToCart>
          <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
        </ButtonAddToCart>
      </CardFooter>
    </CoffeCardContainer>
  );
}
