import { Actions, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
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
          <button>
            <ShoppingCart size={22} color="#c47f17" weight="fill" />
          </button>
        </Actions>
      </nav>
    </HeaderContainer>
  );
}
