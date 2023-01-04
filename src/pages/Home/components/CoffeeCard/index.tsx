import { CartButton } from "../../../../components/CartButton";
import {
  CoffeCardContainer,
  CoffeeDescription,
  CoffeePrice,
  CoffeeTitle,
  Tag,
} from "./styles";
import { AddRemove } from "../../../../components/AddRemove";

interface CoffeeCardProps {
  title: string;
  description: string;
  imageSrc: string;
  firstTag?: string;
  secondTag?: string;
  thirdTag?: string;
  price: number;
}

export function CoffeeCard({
  title,
  description,
  imageSrc,
  firstTag,
  secondTag,
  thirdTag,
  price,
}: CoffeeCardProps) {
  function handleCart() {
    console.log("clicou");
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
          {price
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            .replace(".", ",")}
        </CoffeePrice>
        <div>
          <AddRemove />
          <button onClick={handleCart}>
            <CartButton color="purple" />
          </button>
        </div>
      </div>
    </CoffeCardContainer>
  );
}
