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
import { AddressForm } from "./AddressForm";
import { ProductOnCart } from "./ProductOnCart";
import {
  ButtonPayment,
  CheckoutContainer,
  CoffeeContainer,
  ConfirmPayment,
  ContainerInformations,
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

  function handleSubmit() {
    alert("oi");
  }

  return (
    <CheckoutContainer>
      <form action="" id="coffee-form" onSubmit={handleSubmit}>
        <section>
          <h3>Complete seu pedido</h3>
          <AddressForm />
          <PaymentContainer>
            <ContainerInformations iconColor="purple-dark">
              <CurrencyDollar size={20} />
              <span>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
              {/* <button disabled={!haveItemsOnCart}>CONFIRMAR PEDIDO</button> */}
              <button form="coffee-form" type="submit">
                CONFIRMAR PEDIDO
              </button>
            </ConfirmPayment>
          </CoffeeContainer>
        </aside>
      </form>
    </CheckoutContainer>
  );
}
