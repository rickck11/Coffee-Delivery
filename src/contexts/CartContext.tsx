import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addOrUpdateProduct,
  deleteProductById,
  resetAllProductsFromCart,
} from "../reducers/Coffee/actions";
import { cartReducer, Product } from "../reducers/Coffee/reducer";

export interface JsonOrderType {
  cep: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  uf: string;
  neighborhood: string;
  orderList: object[];
  totalPrice: number;
  deliveryPrice: number;
  finalPrice: number;
  paymentMode: string;
}

interface CartContextType {
  cart: Product[];
  addNewProduct: (newProduct: Product) => void;
  deleteProduct: (id: string) => void;
  resetCart: () => void;
  saveJsonOrder: (json: JsonOrderType) => void;
  jsonOrder: JsonOrderType | undefined;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [jsonOrder, setJsonOrder] = useState<JsonOrderType | undefined>();

  function saveJsonOrder(json: JsonOrderType) {
    setJsonOrder(json);
  }

  function deleteProduct(id: string) {
    dispatchCart(deleteProductById(id));
  }

  function addNewProduct({ id, amount, price }: Product) {
    dispatchCart(addOrUpdateProduct({ id, amount, price }));
  }

  function resetCart() {
    dispatchCart(resetAllProductsFromCart());
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addNewProduct,
        deleteProduct,
        resetCart,
        saveJsonOrder,
        jsonOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
