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
import { CoffeProps } from "../../../../coffe db/allCoffes";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContexts";
import { OrderCoffeProps } from "../../../../reducers/order/reducer";
import { useState } from "react";

export function CoffeCard({
  id,
  name,
  description,
  imageUrl,
  price,
  type,
}: CoffeProps) {
  const [coffeAmount, setCoffeeAmount] = useState(0);
  const { addCoffeToCart, orderCoffes } = useContext(OrderContext);
  function handleAddCoffeToCart() {
    let data: OrderCoffeProps;
    data = {
      name: name,
      imageUrl: imageUrl,
      price: price,
      quantity: 5,
      totalPayable: 250,
    };
    addCoffeToCart(data);

    console.log(orderCoffes);
  }

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
        <ButtonAddToCart type="button" onClick={handleAddCoffeToCart}>
          <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
        </ButtonAddToCart>
      </CardFooter>
    </CoffeCardContainer>
  );
}
