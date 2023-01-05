import Logo from "../../assets/Logo.svg";
import { MapPin } from "phosphor-react";
import { HeaderContainer, Location } from "./styles";
import { CartButton } from "../CartButton";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useEffect, useState } from "react";

export function Header() {
  const [totalProducts, setTotalProducts] = useState(0);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    for (const c of cart) {
      total += c.amount;
    }
    if (total !== totalProducts) {
      setTotalProducts(total);
    }
  }, [cart]);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <Location>
          <MapPin size={16} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>

        <NavLink to="/checkout">
          <CartButton
            color="yellow"
            notify={true}
            productsAmount={totalProducts}
          ></CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
