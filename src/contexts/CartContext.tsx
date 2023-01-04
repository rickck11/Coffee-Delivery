import { createContext, ReactNode, useState } from "react";

interface Product {
  id: string;
  amount: number;
}

interface CartContextType {
  cart: Product[];
  addNewProduct: (newProduct: Product) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  function addNewProduct(newProduct: Product) {
    setCart((state) => [...state, newProduct]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
