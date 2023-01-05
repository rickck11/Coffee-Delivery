import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { ContainerInformations } from "../styles";
import { FormContainer } from "./styles";

export function AddressForm() {
  const { register } = useFormContext();
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
        <input type="text" placeholder="CEP" required {...register("cep")} />
        <input
          type="text"
          className="input-large"
          placeholder="Rua"
          required
          {...register("street")}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Número"
            required
            {...register("number")}
          />
          <input
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Bairro"
            required
            {...register("neighborhood")}
          />
          <input
            type="text"
            placeholder="Cidade"
            required
            {...register("city")}
          />
          <input type="text" placeholder="UF" required {...register("uf")} />
        </div>
      </div>
    </FormContainer>
  );
}
