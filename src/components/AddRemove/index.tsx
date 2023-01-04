import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { AddRemoveContainer } from "./styles";

export function AddRemove() {
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
    <AddRemoveContainer>
      <button onClick={handleRemove}>
        <Minus size={16} weight="fill" />
      </button>
      <p>{amount.toString()}</p>
      <button onClick={handleAdd}>
        <Plus size={16} weight="fill" />
      </button>
    </AddRemoveContainer>
  );
}
