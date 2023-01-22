import americano from "../assets/americano.svg";
import expresso from "../assets/expresso.svg";
import expressoCremoso from "../assets/expressoCremoso.svg";
import cafeGelado from "../assets/cafeGelado.svg";
import cafeComLeite from "../assets/cafeComLeite.svg";
import latte from "../assets/latte.svg";
import capuccino from "../assets/capuccino.svg";
import macchiato from "../assets/macchiato.svg";
import mochaccino from "../assets/mochaccino.svg";
import chocolateQuente from "../assets/chocolateQuente.svg";
import havaiano from "../assets/havaiano.svg";
import cubano from "../assets/cubano.svg";
import irlandes from "../assets/irlandes.svg";
import arabe from "../assets/arabe.svg";

export interface CoffeProps {
  id?: string;
  name: string;
  type: string[];
  description: string;
  price: number;
  imageUrl: string;
}

export const allCoffes: CoffeProps[] = [
  {
    id: "38f1ce2a-871b-4be9-905e-ffafcf5901a9",
    imageUrl: expresso,
    name: "Expresso Tradicional",
    type: ["TRADICIONAL"],
    description: " O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: "9f8eae27-3484-4dcc-8390-2f2024a3a26b",
    imageUrl: americano,
    name: "Expresso Americano",
    type: ["TRADICIONAL"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: "8e918c2d-4ffb-4448-81f3-c862d8925517",
    imageUrl: expressoCremoso,
    name: "Expresso Cremoso",
    type: ["TRADICIONAL"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: "a1d4a0be-87d5-40d6-9b03-b05e00049175",
    imageUrl: cafeGelado,
    name: "Expresso Gelado",
    type: ["TRADICIONAL", "GELADO"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: "887c0ec5-f761-48d1-91eb-c69408be195f",
    imageUrl: cafeComLeite,
    name: "Café com Leite",
    type: ["TRADICIONAL", "COM LEITE"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: "470be12b-93d4-486d-882f-194c67222839",
    imageUrl: latte,
    name: "Latte",
    type: ["TRADICIONAL", "COM LEITE "],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: "18aef94e-b535-4bc2-8488-020c39e5e85e",
    imageUrl: capuccino,
    name: "Capuccino",
    type: ["TRADICIONAL", "COM LEITE"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: "33879c34-31a2-4926-b11e-0631d8f67a4f",
    imageUrl: macchiato,
    name: "Macchiato",
    type: ["TRADICIONAL", "COM LEITE"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: "ab8ee0f6-2e24-468a-b805-389e4b5f62d0",
    imageUrl: mochaccino,
    name: "Mochaccino",
    type: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: "54518031-5043-4284-98eb-c3f469cf62d1",
    imageUrl: chocolateQuente,
    name: "Chocolate Quente",
    type: ["Especial", "COM LEITE"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: "1d5338d2-c9e6-4be9-a93e-8c03d83f7c48",
    imageUrl: cubano,
    name: "Cubano",
    type: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: "13517b61-205c-4a0f-864a-2ffbdc37406e",
    imageUrl: havaiano,
    name: "Havaiano",
    type: ["ESPECIAL"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },

  {
    id: "4718c5e2-9d6c-4301-9b48-9f6278130995",
    imageUrl: arabe,
    name: "Árabe",
    type: ["ESPECIAL"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: "7ddc23a2-66fa-4d79-8b55-06bd5d39feb2",
    imageUrl: irlandes,
    name: "Irlandês",
    type: ["ESPECIAL", "ALCOÓLICO"],
    description: "Bebida a base de café, uísque irlandês, açucar e chantily",
    price: 9.9,
  },
];
