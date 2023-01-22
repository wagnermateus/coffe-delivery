import { createContext, ReactNode, useReducer } from "react";
import { CoffeProps } from "../coffe db/allCoffes";
import { allCoffes } from "../coffe db/allCoffes";
import { addCoffeAction, removeCoffeAction } from "../reducers/order/actions";
import { OrderCoffeProps, orderReducer } from "../reducers/order/reducer";

interface OrderContextProps {
  orderCoffes: OrderCoffeProps[];
  allCoffes: CoffeProps[];

  removeCoffeFromCart: (coffeName: string) => void;
  addCoffeToCart: (coffe: OrderCoffeProps) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderStates, dispatch] = useReducer(orderReducer, {
    orderCoffes: [],
    coffeId: null,
  });
  const { orderCoffes, coffeId } = orderStates;
  function addCoffeToCart(coffe: OrderCoffeProps) {
    const orderCoffe: OrderCoffeProps = {
      imageUrl: coffe.imageUrl,
      name: coffe.name,
      price: coffe.price,
      quantity: coffe.quantity,
      totalPayable: coffe.totalPayable,
    };
    dispatch(addCoffeAction(orderCoffe));
  }
  function removeCoffeFromCart(coffeName: string) {
    dispatch(removeCoffeAction(coffeName));
  }
  return (
    <OrderContext.Provider
      value={{
        allCoffes,
        orderCoffes,
        addCoffeToCart,

        removeCoffeFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
