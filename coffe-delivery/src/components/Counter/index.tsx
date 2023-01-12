import { Minus, Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { CounterComponent } from "./styles";

interface CountProps {
  id: string;
  amount: number;
  reduceAmountValue: (id: string) => void;
  incrementAmountValue: (id: string) => void;
}

export function Counter({ amount, id, reduceAmountValue, incrementAmountValue}: CountProps) {



   function handleDecreaseCoffee(){
    reduceAmountValue(id)
   }

   function handleIncreaseCoffee(){
    incrementAmountValue(id);

   }
    
  return (
    <CounterComponent>
      <button type="button" onClick={handleDecreaseCoffee} disabled={amount ===0}>
        <Minus size={20} weight="fill"/>
      </button>
      <span>{amount}</span>
      <button type="button" onClick={handleIncreaseCoffee}>
        <Plus size={20} weight="fill" />
      </button>
    </CounterComponent>
  );
}
