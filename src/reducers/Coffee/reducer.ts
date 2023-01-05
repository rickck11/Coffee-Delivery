import { CartActionTypes } from "./actions";

export interface Product {
  id: string;
  amount: number;
  price: number;
}

export function cartReducer(state: Product[], action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT: {
      const isProductOnCart = state.find((c) => c.id === action.payload.id);
      if (isProductOnCart) {
        const updatedCart = state.map((c) => {
          if (c.id === action.payload.id) {
            return { ...c, amount: c.amount + action.payload.amount };
          }
          return c;
        });
        return updatedCart;
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            amount: action.payload.amount,
            price: action.payload.price,
          },
        ];
      }
    }
    case CartActionTypes.DELETE_PRODUCT: {
      const isProductOnCart = state.find((c) => c.id === action.payload.id);
      if (isProductOnCart) {
        const deletedItem = state.filter((c) => c.id !== action.payload.id);
        return deletedItem;
      }
      return state;
    }
    case CartActionTypes.RESET_CART: {
      return [];
    }
    default:
      return state;
  }
}
