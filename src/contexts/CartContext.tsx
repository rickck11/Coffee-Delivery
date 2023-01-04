import { createContext, ReactNode, useEffect, useState } from "react";

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

  function addNewProduct({ id, amount }: Product) {
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
      setCart((state) => [...state, { id, amount }]);
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
