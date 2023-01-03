import { CoffeeMenu } from "./components/CoffeeMenu";
import { Presentation } from "./components/Presentation";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Presentation />
      <CoffeeMenu />
    </HomeContainer>
  );
}
