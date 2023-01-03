import { ShoppingCart } from "phosphor-react";
import CoffeeDeliveryAside from "../../../../assets/CoffeeDeliveryAside.svg";
import { PresentationContainer } from "../styles";

export function Presentation() {
  return (
    <PresentationContainer>
      <section>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffe Delvery você recebe seu café onde estiver a qualquer hora
        </p>
        <div>
          <div>
            <div>
              <ShoppingCart size={20} weight="fill" />
              <p>Compra simples e segura</p>
            </div>
          </div>

          <div>
            <div>
              <ShoppingCart size={20} weight="fill" />
              <p>Compra simples e segura</p>
            </div>
          </div>
          <div>
            <div>
              <ShoppingCart size={20} weight="fill" />
              <p>Compra simples e segura</p>
            </div>
          </div>
          <div>
            <div>
              <ShoppingCart size={20} weight="fill" />
              <p>Compra simples e segura</p>
            </div>
          </div>
        </div>
      </section>
      <aside>
        <img src={CoffeeDeliveryAside} alt="" />
      </aside>
    </PresentationContainer>
  );
}
