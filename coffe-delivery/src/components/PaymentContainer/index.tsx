import { PaymentComponent } from "./styles";
import { Counter } from "../Counter";
import Cafe from "../../assets/Coffee-1.svg";
import { Trash } from "phosphor-react";
export function PaymentContainer() {
    return(
        <PaymentComponent >
          <div className="content">
            <img src={Cafe} alt="" />
            <div>
              <strong>Expresso Tradicional</strong>
              <div className="action-container">
                <Counter amount={1} />
                <span className="remove-button"><Trash size={18}/>Remover</span>
              </div>
            </div>
          </div>
          <span>R$ 9,90</span>
        </PaymentComponent>
    )
}