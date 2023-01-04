import { createContext, ReactNode } from "react";

interface Products {
  id: string;
  amount: number;
}

interface CartContextType {
  cart: Products[];
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
