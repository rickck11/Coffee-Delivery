import Logo from "../../assets/Logo.svg";
import { MapPin } from "phosphor-react";
import { HeaderContainer, Location } from "./styles";
import { CartButton } from "../CartButton";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <Location>
          <MapPin size={16} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <NavLink to="/checkout">
          <CartButton
            color="yellow"
            notify={true}
            productsAmount={12}
          ></CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
