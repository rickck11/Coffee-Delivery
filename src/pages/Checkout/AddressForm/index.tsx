import { MapPinLine } from "phosphor-react";
import { ContainerInformations } from "../styles";
import { FormContainer } from "./styles";

export function AddressForm() {
  return (
    <FormContainer>
      <ContainerInformations iconColor="yellow-dark">
        <MapPinLine size={20} />
        <span>
          <strong>Endereço de Entrega</strong>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </ContainerInformations>
      <div id="inputs">
        <input type="text" placeholder="CEP" required />
        <input type="text" className="input-large" placeholder="Rua" required />
        <div className="input-group">
          <input type="text" placeholder="Número" required />
          <input type="text" placeholder="Complemento" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Bairro" required />
          <input type="text" placeholder="Cidade" required />
          <input type="text" placeholder="UF" required />
        </div>
      </div>
    </FormContainer>
  );
}
