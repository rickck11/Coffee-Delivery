import { CartButton } from "../../../../components/CartButton";
import Coffee from "../../../../assets/coffee/ExpressoTradicional.svg";
import {
  CoffeCardContainer,
  CoffeeDescription,
  CoffeePrice,
  CoffeeTitle,
} from "./styles";
import { AddRemove } from "../../../../components/AddRemove";

export function CoffeeCard() {
  return (
    <CoffeCardContainer>
      <img src={Coffee} alt="" />
      <div className="tags">
        <div>tag1</div>
        <div>tag2</div>
      </div>
      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moidos
      </CoffeeDescription>
      <div className="control">
        <CoffeePrice>
          <small>R$</small>9,90
        </CoffeePrice>
        <div>
          <AddRemove />
          <CartButton color="purple" />
        </div>
      </div>
    </CoffeCardContainer>
  );
}
