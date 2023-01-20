import { Actions, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Checkout } from "../../pages/Checkout";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="Copo de café" />
        <Actions>
          <span>
            <MapPin size={22} color="#8047f8" weight="fill" />
            <p>Luanda, Kilamba kiaxi</p>
          </span>
          <NavLink to="/checkout">
            <ShoppingCart size={22} color="#c47f17" weight="fill" />
          </NavLink>
        </Actions>
      </nav>
    </HeaderContainer>
  );
}
