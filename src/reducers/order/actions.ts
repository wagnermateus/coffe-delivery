import { OrderCoffeProps } from "./reducer";

export enum ActionTypes {
  ADD_COFFE_TO_CART = "ADD_COFFE_TO_CART",
  REMOVE_COFFE_FROM_CART = "REMOVE_COFFE_FROM_CART",
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
