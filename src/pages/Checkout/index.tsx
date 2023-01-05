import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
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

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const coffeeOrderFormValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string(),
});

type coffeeFormData = zod.infer<typeof coffeeOrderFormValidationSchema>;

export function Checkout() {
  const { cart, resetCart } = useContext(CartContext);
  const [paymentMode, setPaymentMode] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const haveItemsOnCart = cart.length > 0;
  const deliveryPrice = haveItemsOnCart ? 3.5 : 0;

  function handleChangePaymentMode(mode: number) {
    if (mode === paymentMode) {
      setPaymentMode(0);
    } else {
      setPaymentMode(mode);
    }
  }

  useEffect(() => {
    setFinalPrice(totalPrice + deliveryPrice);
  }, [deliveryPrice, totalPrice]);

  useEffect(() => {
    let totalPrice = 0;
    for (const c of cart) {
      totalPrice += c.price * c.amount;
    }
    setTotalPrice(totalPrice);
  }, [cart]);

  const coffeeOrderForm = useForm<coffeeFormData>({
    resolver: zodResolver(coffeeOrderFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
    },
  });

  const { handleSubmit, reset } = coffeeOrderForm;

  function generateJSON(data: coffeeFormData) {
    const orderList = [];

    for (const c of CoffeeList) {
      orderList.push({
        title: c.title,
        description: c.description,
        price: "R$ " + formartNumberToCurrency(c.price, "BR"),
      });
    }

    return {
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      city: data.city,
      uf: data.uf,
      neighborhood: data.neighborhood,
      orderList,
      totalPrice,
      deliveryPrice,
      finalPrice,
      paymentMode,
    };
  }

  function sendCoffeeOrder(json: string) {
    console.log(json);
  }

  const showToastMessage = () => {
    toast.warning("Selecione uma forma de pagamento", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  function handleCoffeeOrderSubmit(data: coffeeFormData) {
    if (paymentMode === 1 || paymentMode === 2 || paymentMode === 3) {
      const formJSON = generateJSON(data);
      sendCoffeeOrder(JSON.stringify(formJSON));
      setPaymentMode(0);
      resetCart();
      reset();
    } else {
      showToastMessage();
    }
  }

  return (
    <CheckoutContainer>
      <ToastContainer />
      <form onSubmit={handleSubmit(handleCoffeeOrderSubmit)} action="">
        <section>
          <h3>Complete seu pedido</h3>
          <FormProvider {...coffeeOrderForm}>
            <AddressForm />
          </FormProvider>
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
                type="button"
                onClick={() => {
                  handleChangePaymentMode(1);
                }}
              >
                <CreditCard size={18} />
                <p>CARTÃO DE CRÉDITO</p>
              </ButtonPayment>
              <ButtonPayment
                type="button"
                onClick={() => {
                  handleChangePaymentMode(2);
                }}
              >
                <Bank size={18} />
                <p>CARTÃO DE DÉBITO</p>
              </ButtonPayment>
              <ButtonPayment
                type="button"
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
                <span>R$ {formartNumberToCurrency(deliveryPrice, "BR")}</span>
              </p>
              <strong>
                <span>Total</span>
                <span>R$ {formartNumberToCurrency(finalPrice, "BR")}</span>
              </strong>

              <button type="submit" disabled={!haveItemsOnCart}>
                CONFIRMAR PEDIDO
              </button>
            </ConfirmPayment>
          </CoffeeContainer>
        </aside>
      </form>
    </CheckoutContainer>
  );
}
