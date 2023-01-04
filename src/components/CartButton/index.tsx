import { ShoppingCart } from "phosphor-react";
import {
  CartButtonContainer,
  CartButtonContainerProps,
  Notify,
} from "./styled";

interface CartButtonProps {
  color: "yellow" | "purple";
  notify?: boolean;
  productsAmount?: number;
}

export function CartButton({
  color,
  notify = false,
  productsAmount = 0,
}: CartButtonProps) {
  return (
    <CartButtonContainer color={color}>
      <ShoppingCart size={20} weight="fill" />
      {notify && productsAmount > 0 && (
        <Notify color={color}>
          {productsAmount >= 10 ? "+9" : productsAmount}
        </Notify>
      )}
    </CartButtonContainer>
  );
}
