import LogoCoffee from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { HeaderComponent } from "./styles";

export function Header() {
  return (
      <HeaderComponent>
        <img src={LogoCoffee} alt="" />

        <div>
          <span>
            <MapPin size={18} weight="fill" /> Salvador, Ba
          </span>
          <button className="shoppingCart" type="button">
            <span className="shoppingCart-alert active">1</span>
            <ShoppingCart size={18} weight="fill"/>
          </button>
        </div>
      </HeaderComponent>

  );
}
