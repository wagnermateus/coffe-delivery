import { OrderCoffeProps } from "./reducer";

export enum ActionTypes {
  ADD_COFFE_TO_CART = "ADD_COFFE_TO_CART",
  REMOVE_COFFE_FROM_CART = "REMOVE_COFFE_FROM_CART",
  INCREASE_THE_AMOUNT_OF_COFFE_INSIDE_THE_ORDER_CARD = "increaseTheAmountOfCoffeInsideTheOrderCard",
  REDUCE_THE_AMOUNT_OF_COFFE_INSIDE_THE_ORDER_CARD = "REDUCE_THE_AMOUNT_OF_COFFE_INSIDE_THE_ORDER_CARD",
  RESET_CART = "RESET_CART",
}

export function addCoffeAction(coffe: OrderCoffeProps) {
  return {
    type: ActionTypes.ADD_COFFE_TO_CART,
    payload: { coffe },
  };
}
export function removeCoffeAction(coffeName: string) {
  return {
    type: ActionTypes.REMOVE_COFFE_FROM_CART,
    payload: { coffeName },
  };
}
export function increaseTheAmountOfCoffeInsideTheOrderCardAction(
  coffeName: string
) {
  return {
    type: ActionTypes.INCREASE_THE_AMOUNT_OF_COFFE_INSIDE_THE_ORDER_CARD,
    payload: { coffeName },
  };
}

export function reduceTheAmountOfCoffeInsideTheOrderCardAction(
  coffeName: string
) {
  return {
    type: ActionTypes.REDUCE_THE_AMOUNT_OF_COFFE_INSIDE_THE_ORDER_CARD,
    payload: { coffeName },
  };
}
export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  };
}
