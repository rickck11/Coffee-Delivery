import { CartButton } from "../../../../components/CartButton";
import {
  CoffeCardContainer,
  CoffeeDescription,
  CoffeePrice,
  CoffeeTitle,
  Tag,
} from "./styles";
import { AddRemove } from "../../../../components/AddRemove";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { formartNumberToCurrency } from "../../../../utils/utils";

interface CoffeeCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  firstTag?: string;
  secondTag?: string;
  thirdTag?: string;
  price: number;
}

export function CoffeeCard({
  id,
  title,
  description,
  imageSrc,
  firstTag,
  secondTag,
  thirdTag,
  price,
}: CoffeeCardProps) {
  const { addNewProduct } = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  function handleAdd() {
    if (amount < 99) {
      setAmount(amount + 1);
    }
  }

  function handleRemove() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  function handleCartButton() {
    if (amount > 0) {
      addNewProduct({ id, amount });
      setAmount(0);
    }
  }

  return (
    <CoffeCardContainer>
      <img src={imageSrc} alt="" />
      <div className="tags">
        {firstTag && <Tag>{firstTag}</Tag>}
        {secondTag && <Tag>{secondTag}</Tag>}
        {thirdTag && <Tag>{thirdTag}</Tag>}
      </div>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>
      <div className="control">
        <CoffeePrice>
          <small>R$</small>
          {formartNumberToCurrency(price, "BR")}
        </CoffeePrice>
        <div>
          <AddRemove
            amount={amount}
            addOne={handleAdd}
            removeOne={handleRemove}
          />
          <button onClick={handleCartButton}>
            <CartButton color="purple" />
          </button>
        </div>
      </div>
    </CoffeCardContainer>
  );
}
