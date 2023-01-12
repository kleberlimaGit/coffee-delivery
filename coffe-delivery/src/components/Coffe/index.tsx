import axios from "axios";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { formatter } from "../../utils/utils";
import { Counter } from "../Counter";
import { CoffeComponent } from "./styles";

interface CoffeProps {
  id: string;
  img: string;
  type: string[];
  name: string;
  description: string;
  value: number;
  amount: number;
}

export function Coffe(coffee: CoffeProps) {
  const { incrementAmountValue, reduceAmountValue } = useContext(CoffeeContext);

  return (
    <CoffeComponent>
      <img src={coffee.img} alt="" />
      <div className="tag-container">
        {coffee.type.map((tp) => {
          return <small key={tp}>{tp}</small>;
        })}
      </div>
      <p>{coffee.name}</p>
      <small className="description">{coffee.description}</small>
      <div className="coffee-value-container">
        <span className="coffee-value">{formatter.format(coffee.value)}</span>
        <div>
          <Counter
            amount={coffee.amount}
            id={coffee.id}
            incrementAmountValue={incrementAmountValue}
            reduceAmountValue={reduceAmountValue}
          />
          <a className="cart" href="#">
            <ShoppingCart size={20} weight="fill" />
          </a>
        </div>
      </div>
    </CoffeComponent>
  );
}
