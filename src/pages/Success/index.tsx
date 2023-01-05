import { MapPin, Timer } from "phosphor-react";
import { DeliveryInformations, Icon, SuccessContainer } from "./styles";
import IllustrationSuccess from "../,./../../assets/IllustrationSuccess.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { json } from "react-router-dom";

interface Order {}

export function Success() {
  const { jsonOrder } = useContext(CartContext);

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado </h2>
      <h3>Agona é só aguardar que logo o café chegará até você</h3>
      <div>
        <DeliveryInformations>
          <div id="informations">
            <span>
              <Icon bgColor="purple">
                <MapPin size={16} weight="fill" />
              </Icon>
              <p>
                Entrega em
                <strong>
                  {jsonOrder ? ` ${jsonOrder.street}` : " Rua de Exemplo, 187"}
                </strong>
                <br />
                {jsonOrder
                  ? `${jsonOrder.neighborhood} - ${jsonOrder.city}, ${jsonOrder.uf}`
                  : "Exemplo - Estado Exemplo, EX"}
              </p>
            </span>
            <span>
              <Icon bgColor="yellow">
                <Timer size={16} weight="fill" />
              </Icon>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>{" "}
              </p>
            </span>
            <span>
              <Icon bgColor="yellow-dark">
                <Timer size={16} weight="fill" />
              </Icon>
              <p>
                Pagamento na entrega
                <br />
                <strong>
                  {jsonOrder ? jsonOrder.paymentMode : "Exemplo de Pagamento"}
                </strong>
              </p>
            </span>
          </div>
          <img src={IllustrationSuccess} alt="" />
        </DeliveryInformations>
      </div>
    </SuccessContainer>
  );
}
