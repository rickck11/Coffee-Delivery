import { Minus, Plus } from "phosphor-react";
import { AddRemoveContainer } from "./styles";

export function AddRemove() {
  return (
    <AddRemoveContainer>
      <button>
        <Minus size={16} weight="fill" />
      </button>
      <p>3</p>
      <button>
        <Plus size={16} weight="fill" />
      </button>
    </AddRemoveContainer>
  );
}
