import produce from "immer";
import { ActionTypes } from "./actions";

export interface OrderCoffeProps {
  id?: string | null;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  totalPayable: number;
}
interface OrderState {
  orderCoffes: OrderCoffeProps[];
  coffeId?: string | null;
}
export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFE_TO_CART:
      return produce(state, (draft) => {
        draft.orderCoffes.push(action.payload.coffe);
      });

    case ActionTypes.REMOVE_COFFE_FROM_CART:
      const coffeIndex = state.orderCoffes.findIndex((coffe) => {
        return coffe.name === action.payload.coffeName;
      });
      return produce(state, (draft) => {
        draft.orderCoffes.splice(coffeIndex, 1);
      });

    default:
      return state;
  }
}
