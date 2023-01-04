import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { AddRemoveContainer } from "./styles";

interface AddRemoveProps {
  h?: number;
  amount: number;
  addOne: () => void;
  removeOne: () => void;
}

export function AddRemove({ h, amount, addOne, removeOne }: AddRemoveProps) {
  return (
    <AddRemoveContainer h={h}>
      <button onClick={removeOne}>
        <Minus size={16} weight="fill" />
      </button>
      <p>{amount.toString()}</p>
      <button onClick={addOne}>
        <Plus size={16} weight="fill" />
      </button>
    </AddRemoveContainer>
  );
}
