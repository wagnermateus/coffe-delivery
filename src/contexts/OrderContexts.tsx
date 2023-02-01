import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CoffeProps } from "../coffe db/allCoffes";
import { allCoffes } from "../coffe db/allCoffes";
import { orderFormData } from "../pages/Checkout";
import {
  addCoffeAction,
  increaseTheAmountOfCoffeInsideTheOrderCardAction,
  reduceTheAmountOfCoffeInsideTheOrderCardAction,
  removeCoffeAction,
  resetCartAction,
} from "../reducers/order/actions";
import { OrderCoffeProps, orderReducer } from "../reducers/order/reducer";

interface OrderContextProps {
  orderCoffes: OrderCoffeProps[];
  allCoffes: CoffeProps[];
  formData: orderFormData;
  removeCoffeFromCart: (coffeName: string) => void;
  addCoffeToCart: (coffe: OrderCoffeProps) => void;
  increaseTheAmountOfCoffeInsideTheOrderCard: (coffeName: string) => void;
  reduceTheAmountOfCoffeInsideTheOrderCard: (coffeName: string) => void;
  handleNewOrder: (data: orderFormData) => void;
  resetCart: () => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderStates, dispatch] = useReducer(
    orderReducer, 
    {
      orderCoffes:[]
    },
    () => {

      const storedStateAsJSON = localStorage.getItem(
        "01-@coffe-delivery:order-states-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      else{
        return {orderCoffes:[]}
      }
     
    }
  );

  const { orderCoffes } = orderStates;
  const [formData, setFormData] = useState<orderFormData>(
    
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "01-@coffe-delivery:form-data-1.0.0"
      );
    if (storedStateAsJSON) {
      
      return JSON.parse(storedStateAsJSON);
    }  else{
      return {}
    }
  } 
  
  
  );
  
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

  function increaseTheAmountOfCoffeInsideTheOrderCard(coffeName: string) {
    dispatch(increaseTheAmountOfCoffeInsideTheOrderCardAction(coffeName));
  }

  function reduceTheAmountOfCoffeInsideTheOrderCard(coffeName: string) {
    dispatch(reduceTheAmountOfCoffeInsideTheOrderCardAction(coffeName));
  }

  function handleNewOrder(data: orderFormData) {
    setFormData(data);
  }
  function resetCart() {
    dispatch(resetCartAction());
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(formData);

    localStorage.setItem("01-@coffe-delivery:form-data-1.0.0", stateJSON);
  }, [formData]);

  useEffect(() => {
    const stateJSON = JSON.stringify(orderStates);

    localStorage.setItem("01-@coffe-delivery:order-states-1.0.0", stateJSON);
  }, [orderStates]);  

  return (
    <OrderContext.Provider
      value={{
        allCoffes,
        orderCoffes,
        formData,
        addCoffeToCart,
        increaseTheAmountOfCoffeInsideTheOrderCard,
        reduceTheAmountOfCoffeInsideTheOrderCard,
        removeCoffeFromCart,
        handleNewOrder,
        resetCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
