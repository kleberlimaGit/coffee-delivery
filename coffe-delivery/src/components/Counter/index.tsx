import { Minus, Plus } from "phosphor-react";
import { CounterComponent } from "./styles";

interface CountProps {
  amount: number;
}

export function Counter({ amount }: CountProps) {
  return (
    <CounterComponent>
      <button type="button">
        {" "}
        <Minus size={20} weight="fill" />{" "}
      </button>
      <span>{amount}</span>
      <button type="button">
        {" "}
        <Plus size={20} weight="fill" />
      </button>
    </CounterComponent>
  );
}
