import { CoffeeCard } from "../CoffeeCard";
import { CoffeeCards, CoffeeMenuContaier } from "./styles";
import { CoffeeList } from "../../../../assets/coffee/CoffeeList";

export function CoffeeMenu() {
  return (
    <CoffeeMenuContaier>
      <h2>Nossos cafés</h2>
      <CoffeeCards>
        {CoffeeList.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              title={coffee.title}
              description={coffee.description}
              imageSrc={coffee.imageSrc}
              firstTag={coffee.firstTag}
              secondTag={coffee.secondTag}
              thirdTag={coffee.thirdTag}
              price={coffee.price}
            />
          );
        })}
      </CoffeeCards>
    </CoffeeMenuContaier>
  );
}
