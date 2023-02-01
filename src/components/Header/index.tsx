import { Actions, CartContainer, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

import { NavLink, useNavigate } from "react-router-dom";
import { ItemsInCartCounter } from "./components/ItemsInCartCounter";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContexts";
export function Header() {
  const { orderCoffes } = useContext(OrderContext);
  
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="Copo de café" onClick={() => navigate("/")} />
        <Actions>
          <span>
            <MapPin size={22} color="#8047f8" weight="fill" />
            <p>Luanda, Kilamba kiaxi</p>
          </span>

          <CartContainer>
            <NavLink to="/checkout" title="Carrinho">
              {orderCoffes.length > 0 && <ItemsInCartCounter />}
              <ShoppingCart size={22} color="#c47f17" weight="fill" />
            </NavLink>
          </CartContainer>
        </Actions>
      </nav>
    </HeaderContainer>
  );
}
