import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeList } from "../../assets/coffee/CoffeeList";
import { CartContext } from "../../contexts/CartContext";
import { formartNumberToCurrency } from "../../utils/utils";
import { ProductOnCart } from "./ProductOnCart";
import {
  ButtonPayment,
  CheckoutContainer,
  CoffeeContainer,
  ConfirmPayment,
  ContainerInformations,
  FormContainer,
  PaymentContainer,
  PaymentOptionsContainer,
} from "./styles";

export function Checkout() {
  const { cart } = useContext(CartContext);
  const [paymentMode, setPaymentMode] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const delivery = 3.5;
  const haveItemsOnCart = cart.length > 0;

  function handleChangePaymentMode(mode: number) {
    setPaymentMode(mode);
  }

  useEffect(() => {
    setFinalPrice(totalPrice + delivery);
  }, [totalPrice]);

  useEffect(() => {
    let totalPrice = 0;
    for (const c of cart) {
      totalPrice += c.price * c.amount;
    }
    setTotalPrice(totalPrice);
  }, [cart]);

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
          <PaymentOptionsContainer paymentMode={paymentMode}>
            <ButtonPayment
              onClick={() => {
                handleChangePaymentMode(1);
              }}
            >
              <CreditCard size={18} />
              <p>CARTÃO DE CRÉDITO</p>
            </ButtonPayment>
            <ButtonPayment
              onClick={() => {
                handleChangePaymentMode(2);
              }}
            >
              <Bank size={18} />
              <p>CARTÃO DE DÉBITO</p>
            </ButtonPayment>
            <ButtonPayment
              onClick={() => {
                handleChangePaymentMode(3);
              }}
            >
              <Money size={18} />
              <p>DINHEIRO</p>
            </ButtonPayment>
          </PaymentOptionsContainer>
        </PaymentContainer>
      </section>
      <aside>
        <h3>Cafés selecionados</h3>
        <CoffeeContainer>
          {cart.map((c) => {
            const productInfos = CoffeeList.find((cof) => cof.id === c.id);
            if (productInfos) {
              return (
                <ProductOnCart
                  id={c.id}
                  amount={c.amount}
                  key={c.id}
                  imageSrc={productInfos.imageSrc}
                  price={productInfos.price}
                  title={productInfos.title}
                />
              );
            }
            return <></>;
          })}

          <ConfirmPayment>
            <p>
              <span>Total de itens</span>
              <span>R$ {formartNumberToCurrency(totalPrice, "BR")}</span>
            </p>
            <p>
              <span>Entrega</span>
              <span>R$ {formartNumberToCurrency(delivery, "BR")}</span>
            </p>
            <strong>
              <span>Total</span>
              <span>R$ {formartNumberToCurrency(finalPrice, "BR")}</span>
            </strong>
            <button disabled={!haveItemsOnCart}>CONFIRMAR PEDIDO</button>
          </ConfirmPayment>
        </CoffeeContainer>
      </aside>
    </CheckoutContainer>
  );
}
