import { createContext, ReactNode, useEffect, useState } from "react";

interface Product {
  id: string;
  amount: number;
  price: number;
}

interface CartContextType {
  cart: Product[];
  addNewProduct: (newProduct: Product) => void;
  deleteProduct: (id: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

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

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewProduct,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
