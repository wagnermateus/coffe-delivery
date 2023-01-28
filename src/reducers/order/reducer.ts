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
}
export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFE_TO_CART:
      return produce(state, (draft) => {
        const searchCoffeInCart = state.orderCoffes.findIndex((coffe) => {
          return coffe.name === action.payload.coffe.name;
        });
        const isNotCoffeInCart = searchCoffeInCart === -1;

        if (isNotCoffeInCart) {
          draft.orderCoffes.push(action.payload.coffe);
        }
      });

    case ActionTypes.REMOVE_COFFE_FROM_CART: {
      const coffeIndex = state.orderCoffes.findIndex((coffe) => {
        return coffe.name === action.payload.coffeName;
      });

      return produce(state, (draft) => {
        draft.orderCoffes.splice(coffeIndex, 1);
      });
    }
    case ActionTypes.INCREASE_THE_AMOUNT_OF_COFFE_INSIDE_THE_ORDER_CARD: {
      const coffeIndex = state.orderCoffes.findIndex((coffe) => {
        return coffe.name === action.payload.coffeName;
      });
      return produce(state, (draft) => {
        if (draft.orderCoffes[coffeIndex].quantity < 50) {
          draft.orderCoffes[coffeIndex].quantity += 1;
        }
        draft.orderCoffes[coffeIndex].totalPayable =
          draft.orderCoffes[coffeIndex].price *
          draft.orderCoffes[coffeIndex].quantity;
      });
    }
    case ActionTypes.REDUCE_THE_AMOUNT_OF_COFFE_INSIDE_THE_ORDER_CARD: {
      const coffeIndex = state.orderCoffes.findIndex((coffe) => {
        return coffe.name === action.payload.coffeName;
      });
      return produce(state, (draft) => {
        if (draft.orderCoffes[coffeIndex].quantity > 1) {
          draft.orderCoffes[coffeIndex].quantity -= 1;
        }
        draft.orderCoffes[coffeIndex].totalPayable =
          draft.orderCoffes[coffeIndex].price *
          draft.orderCoffes[coffeIndex].quantity;
      });
    }
    case ActionTypes.RESET_CART: {
      return produce(state, (draft) => {
        draft.orderCoffes = [];
      });
    }

    default:
      return state;
  }
}
