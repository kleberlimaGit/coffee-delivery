import {
  Bank,
  Cardholder,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { PaymentContainer } from "../../components/PaymentContainer";
import { FormComponent, OrderPaymentContainer } from "./styles";

export function FormCoffeeComponent() {
  return (
    <FormComponent>
      <form action="" className="form-container">
        <div>
          <h3>Complete seu Pedido</h3>
          <div className="container-dados-pessoais">
            <div className="title-address">
              <MapPinLine size={25} weight="duotone" />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <div>
              <input type="text" name="cep" placeholder="CEP" />
            </div>
            <div className="street">
              <input type="text" name="rua" placeholder="Rua" />
            </div>

            <div className="numberContainer">
              <input type="number" placeholder="Número" name="numero" />
              <div className="complemente-container">
                <input
                  type="text"
                  placeholder="Complemento"
                  name="complemento"
                />
                <small className="">Opcional</small>
              </div>
            </div>
            <div>
              <input type="text" placeholder="Bairro" name="bairro" />
              <input type="text" placeholder="Cidade" name="cidade" />
              <input type="text" placeholder="UF" name="uf" />
            </div>
          </div>

          <div className="container-dados-pagamento">
            <div className="payment-text">
              <CurrencyDollar size={23} weight="bold" />
              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div>
              <div className="payment-type">
                <div>
                  <input type="radio" name="pagamento" id="credito" value="credito"/>
                  <label htmlFor="credito">
                    <Cardholder size={20} weight="duotone" /> Crédito
                  </label>
                </div>
                <div>
                  <input type="radio" name="pagamento" id="debito" value="debito"/>
                  <label htmlFor="debito">
                    <Bank size={20} weight="duotone" />
                    Débito
                  </label>
                </div>
                <div>
                  <input type="radio" name="pagamento" id="dinheiro" value="dinheiro"/>
                  <label htmlFor="dinheiro">
                    <Money size={20} weight="duotone" />
                    Dinheiro
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <h3>Cafés Selecionados</h3>
          <OrderPaymentContainer>
            <PaymentContainer />
            <PaymentContainer />
            <div>
              <div className="payment-data-container">
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div className="payment-data-container">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div className="payment-data-container">
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
            </div>
            <button type="submit" className="btn-submit">Confirmar Pedido</button>
          </OrderPaymentContainer>
        </div>
      </form>
    </FormComponent>
  );
}
