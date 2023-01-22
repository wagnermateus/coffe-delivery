import coffeCup from "../../assets/coffeCup.svg";

import { CoffeCard } from "./components/CoffeCard";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import {
  CoffeCards,
  CoffeList,
  DeliveryDetails,
  Header,
  HeaderContent,
  HomeContainer,
  HomeTitles,
} from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContexts";

export function Home() {
  const { allCoffes } = useContext(OrderContext);
  return (
    <HomeContainer>
      <Header>
        <HeaderContent>
          <HomeTitles>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora do dia.
            </p>
          </HomeTitles>

          <DeliveryDetails>
            <span>
              <i>
                <ShoppingCart size={32} color="#fcfcfc" weight="fill" />
              </i>
              <p>Compra simples e segura</p>
            </span>
            <span>
              <i>
                <Package size={32} color="#fcfcfc" weight="fill" />
              </i>
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <i>
                <Timer size={32} color="#fcfcfc" weight="fill" />
              </i>
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <i>
                <Coffee size={32} color="#fcfcfc" weight="fill" />
              </i>
              <p>O café chega fresquinho até você</p>
            </span>
          </DeliveryDetails>
        </HeaderContent>
        <article>
          <img src={coffeCup} alt="Copo de café" />
        </article>
      </Header>

      <CoffeList>
        <div>
          <strong>Nossos Cafés</strong>
          <CoffeCards>
            {allCoffes.map((coffe) => (
              <CoffeCard
                key={coffe.id}
                id={coffe.id}
                name={coffe.name}
                imageUrl={coffe.imageUrl}
                price={coffe.price}
                type={coffe.type}
                description={coffe.description}
              />
            ))}
          </CoffeCards>
        </div>
      </CoffeList>
    </HomeContainer>
  );
}
