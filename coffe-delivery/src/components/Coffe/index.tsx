import { ShoppingCart } from "phosphor-react";
import TradicionalCoffee from "../../assets/Coffee-1.svg";
import { Counter } from "../Counter";
import { CoffeComponent } from "./styles";

export function Coffe() {
  return (
    <CoffeComponent>
        <img src={TradicionalCoffee} alt="" />
        <div className="tag-container">
          <small>Tradicional</small>
        </div>
        <p>Expresso Tradicional</p>
        <small className="description">O tradicional café feito com água quente e grãos moidos</small>
        <div className="coffee-value-container">
          <span className="coffee-value">R$ 9,90</span>
          <div>
            <Counter/>
            <a className="cart" href="#">
              <ShoppingCart size={20} weight="fill"/>
            </a>
          </div>
        </div>
    </CoffeComponent>
  );
}
