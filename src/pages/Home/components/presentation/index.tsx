import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeDeliveryAside from "../../../../assets/CoffeeDeliveryAside.svg";
import { Item, Items, PresentationContainer } from "./styles";

export function Presentation() {
  return (
    <PresentationContainer>
      <section>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h4>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h4>
        <Items>
          <div className="item-group">
            <Item bgColor="yellow-dark">
              <div className="icon">
                <ShoppingCart size={20} weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </Item>

            <Item bgColor="yellow">
              <div className="icon">
                <Timer size={20} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </Item>
          </div>
          <div className="item-group">
            <Item bgColor="base-text">
              <div className="icon">
                <Package size={20} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </Item>

            <Item bgColor="purple">
              <div className="icon">
                <Coffee size={20} weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </Item>
          </div>
        </Items>
      </section>
      <aside>
        <img src={CoffeeDeliveryAside} alt="" />
      </aside>
    </PresentationContainer>
  );
}
