import { PaymentContainer } from "../PaymentContainer";
import { OrderPaymentContainer, PaymentOrderContainer } from "./styles";

export function OrderPayment() {
  return (
    <OrderPaymentContainer>
      <PaymentContainer />
      <PaymentContainer />
      <PaymentOrderContainer>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>
      </PaymentOrderContainer>
    </OrderPaymentContainer>
  );
}
