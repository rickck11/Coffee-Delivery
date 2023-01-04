import { Minus, Plus } from "phosphor-react";
import { AddRemoveContainer } from "./styles";

interface AddRemoveProps {
  amount: number;
}

export function AddRemove({ amount }: AddRemoveProps) {
  return (
    <AddRemoveContainer>
      <button>
        <Minus size={16} weight="fill" />
      </button>
      <p>{amount.toString()}</p>
      <button>
        <Plus size={16} weight="fill" />
      </button>
    </AddRemoveContainer>
  );
}
