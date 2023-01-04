import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useState } from "react";
import { AddRemove } from "../../components/AddRemove";
import {
  ButtonPayment,
  CheckoutContainer,
  CoffeeContainer,
  ConfirmPayment,
  ContainerInformations,
  FormContainer,
  PaymentContainer,
  PaymentOptionsContainer,
  RemoveItemButton,
  Separator,
} from "./styles";

export function Checkout() {
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
  return (
    <CheckoutContainer>
      <section>
        <h3>Complete seu pedido</h3>
        <FormContainer>
          <ContainerInformations iconColor="yellow-dark">
            <MapPinLine size={20} />
            <span>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </ContainerInformations>
          <form action="">
            <input type="text" placeholder="CEP" required />
            <input
              type="text"
              className="input-large"
              placeholder="Rua"
              required
            />
            <div className="input-group">
              <input type="text" placeholder="Número" required />
              <input type="text" placeholder="Complemento" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Bairro" required />
              <input type="text" placeholder="Cidade" required />
              <input type="text" placeholder="UF" required />
            </div>
          </form>
        </FormContainer>
        <PaymentContainer>
          <ContainerInformations iconColor="purple-dark">
            <CurrencyDollar size={20} />
            <span>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </ContainerInformations>
          <PaymentOptionsContainer>
            <ButtonPayment>
              <CreditCard size={18} />
              <p>CARTÃO DE CRÉDITO</p>
            </ButtonPayment>
            <ButtonPayment>
              <Bank size={18} />
              <p>CARTÃO DE DÉBITO</p>
            </ButtonPayment>
            <ButtonPayment>
              <Money size={18} />
              <p>DINHEIRO</p>
            </ButtonPayment>
          </PaymentOptionsContainer>
        </PaymentContainer>
      </section>
      <aside>
        <h3>Cafés selecionados</h3>
        {/* Selected Coffee List */}
        <CoffeeContainer>
          <div className="coffee-item">
            <img
              src="https://user-images.githubusercontent.com/43411893/210564476-bd715ea3-c67d-457a-9842-e17617d54703.svg"
              alt=""
            />
            <div className="coffee-options">
              <p>Expresso Tradicional</p>
              <div className="coffee-options-buttons">
                <AddRemove
                  h={32}
                  amount={amount}
                  addOne={handleAdd}
                  removeOne={handleRemove}
                />
                <RemoveItemButton>
                  <Trash size={18} />
                  <p>REMOVER</p>
                </RemoveItemButton>
              </div>
            </div>
            <strong>R$ 9,90</strong>
          </div>
          <Separator />
          <ConfirmPayment>
            <p>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </p>
            <p>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </p>
            <strong>
              <span>Total</span>
              <span>R$ 33,20</span>
            </strong>
            <button>CONFIRMAR PEDIDO</button>
          </ConfirmPayment>
        </CoffeeContainer>
      </aside>
    </CheckoutContainer>
  );
}
