import coffeCup from "../../assets/coffeCup.svg";
import americano from "../../assets/americano.svg";
import expresso from "../../assets/expresso.svg";
import expressoCremoso from "../../assets/expressoCremoso.svg";
import cafeGelado from "../../assets/cafeGelado.svg";
import cafeComLeite from "../../assets/cafeComLeite.svg";
import latte from "../../assets/latte.svg";
import capuccino from "../../assets/capuccino.svg";
import macchiato from "../../assets/macchiato.svg";
import mochaccino from "../../assets/mochaccino.svg";
import chocolateQuente from "../../assets/chocolateQuente.svg";
import havaiano from "../../assets/havaiano.svg";
import cubano from "../../assets/cubano.svg";
import irlandes from "../../assets/irlandes.svg";
import arabe from "../../assets/arabe.svg";
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

export interface CoffeProps {
  name: string;
  type: string[];
  description: string;
  price: number;
  imageUrl: string;
}
export function Home() {
  const coffeDetails: CoffeProps[] = [
    {
      imageUrl: expresso,
      name: "Expresso Tradicional",
      type: ["TRADICIONAL"],
      description: " O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      imageUrl: americano,
      name: "Expresso Americano",
      type: ["TRADICIONAL"],
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
    },
    {
      imageUrl: expressoCremoso,
      name: "Expresso Cremoso",
      type: ["TRADICIONAL"],
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      imageUrl: cafeGelado,
      name: "Expresso Gelado",
      type: ["TRADICIONAL", "GELADO"],
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
    },
    {
      imageUrl: cafeComLeite,
      name: "Café com Leite",
      type: ["TRADICIONAL", "COM LEITE"],
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
    },
    {
      imageUrl: latte,
      name: "Latte",
      type: ["TRADICIONAL", "COM LEITE "],
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
    },
    {
      imageUrl: capuccino,
      name: "Capuccino",
      type: ["TRADICIONAL", "COM LEITE"],
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
    },
    {
      imageUrl: macchiato,
      name: "Macchiato",
      type: ["TRADICIONAL", "COM LEITE"],
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
    },
    {
      imageUrl: mochaccino,
      name: "Mochaccino",
      type: ["TRADICIONAL", "COM LEITE"],
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
    },
    {
      imageUrl: chocolateQuente,
      name: "Chocolate Quente",
      type: ["Especial", "COM LEITE"],
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
    },
    {
      imageUrl: cubano,
      name: "Cubano",
      type: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
    },
    {
      imageUrl: havaiano,
      name: "Havaiano",
      type: ["ESPECIAL"],
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
    },

    {
      imageUrl: arabe,
      name: "Árabe",
      type: ["ESPECIAL"],
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
    },
    {
      imageUrl: irlandes,
      name: "Irlandês",
      type: ["ESPECIAL", "ALCOÓLICO"],
      description: "Bebida a base de café, uísque irlandês, açucar e chantily",
      price: 9.9,
    },
  ];
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
            {coffeDetails.map((coffe) => (
              <CoffeCard
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
