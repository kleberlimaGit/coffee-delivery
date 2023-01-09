import { Minus, Plus } from "phosphor-react";
import { CounterComponent } from "./styles";

export function Counter() {
return (
    <CounterComponent>
        <button type="button"> <Minus size={20} weight="fill" /> </button>
        <span>1</span>
        <button type="button"> <Plus size={20} weight="fill" /></button>
    </CounterComponent>
)
}