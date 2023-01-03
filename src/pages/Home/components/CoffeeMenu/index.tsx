import { CoffeeCard } from "../CoffeeCard";
import { CoffeeMenuContaier } from "./styles";

export function CoffeeMenu() {
  return (
    <CoffeeMenuContaier>
      <h2>Nossos cafés</h2>
      <CoffeeCard />
    </CoffeeMenuContaier>
  );
}
