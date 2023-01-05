import { createContext, ReactNode, useEffect, useState } from "react";
import { json } from "react-router-dom";

interface Product {
  id: string;
  amount: number;
  price: number;
}

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
  const [cart, setCart] = useState<Product[]>([]);
  const [jsonOrder, setJsonOrder] = useState<JsonOrderType | undefined>();

  function saveJsonOrder(json: JsonOrderType) {
    setJsonOrder(json);
  }

  function addNewProduct({ id, amount, price }: Product) {
    const isProductOnCart = cart.find((c) => c.id === id);
    if (isProductOnCart) {
      const updatedCart = cart.map((c) => {
        if (c.id === id) {
          return { ...c, amount: c.amount + amount };
        }
        return c;
      });
      setCart(updatedCart);
    } else {
      setCart((state) => [...state, { id, amount, price }]);
    }
  }

  function deleteProduct(id: string) {
    const isProductOnCart = cart.find((c) => c.id === id);
    if (isProductOnCart) {
      const deleteItem = cart.filter((c) => c.id !== id);
      setCart(deleteItem);
    }
  }

  function resetCart() {
    setCart([]);
  }

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
