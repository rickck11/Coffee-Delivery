import { Presentation } from "./components/presentation";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Presentation />
      <h2>Nossos cafés</h2>
    </HomeContainer>
  );
}
