import axios from "axios";
import { ShoppingCart } from "phosphor-react";
import { useEffect } from "react";
import TradicionalCoffee from "../../assets/Coffee-1.svg";
import { Counter } from "../Counter";
import { CoffeComponent } from "./styles";

interface CoffeProps {
  img: string,
  type: string[],
  name: string,
  description: string,
  value: number,
  amount:number

}


export function Coffe({img, type, name, description, value, amount}: CoffeProps) {

  
  return (
    <CoffeComponent>
        <img src={img} alt="" />
        <div className="tag-container">
          {type.map(tp => {
            return (<small>{tp}</small>)
          })}
        </div>
        <p>{name}</p>
        <small className="description">{description}</small>
        <div className="coffee-value-container">
          <span className="coffee-value">{value}</span>
          <div>
            <Counter amount={amount}/>
            <a className="cart" href="#">
              <ShoppingCart size={20} weight="fill"/>
            </a>
          </div>
        </div>
    </CoffeComponent>
  );
}
