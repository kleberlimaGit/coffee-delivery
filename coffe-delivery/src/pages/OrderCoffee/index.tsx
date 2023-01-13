import { FormCoffeeComponent } from "../../components/FormCoffeeComponent";
import { OrderPayment } from "../../components/OrderPayment";
import { OrderContainer } from "./styles";

export function OrderCoffee() {
  return (
    <OrderContainer>
      <div>
        <h3>Complete seu Pedido</h3>
        <FormCoffeeComponent />
      </div>
      <div>
        <h3>Cafés Selecionados</h3>
        <OrderPayment/>
      </div>
    </OrderContainer>
  );
}
