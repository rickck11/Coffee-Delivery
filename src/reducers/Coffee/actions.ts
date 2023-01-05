import { Product } from "./reducer";

export enum CartActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  RESET_CART = "RESET_CART",
}

export function addOrUpdateProduct({ id, amount, price }: Product) {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload: {
      id,
      amount,
      price,
    },
  };
}

export function deleteProductById(id: string) {
  return {
    type: CartActionTypes.DELETE_PRODUCT,
    payload: {
      id,
    },
  };
}

export function resetAllProductsFromCart() {
  return {
    type: CartActionTypes.RESET_CART,
  };
}
