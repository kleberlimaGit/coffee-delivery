import { Bank, Cardholder, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { FormComponent } from "./styles";

export function FormCoffeeComponent() {
  return (
    <FormComponent>
      <form action="">
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
              <input type="text" placeholder="Complemento" name="complemento" />
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div>
            <div className="payment-type">
              <div>
             
                <input type="radio" name="pagamento" id="credito" />
                <label htmlFor="credito"><Cardholder size={20} weight="duotone"/> Crédito</label>
              </div>
              <div>
                <input type="radio" name="pagamento" id="debito" />
                <label htmlFor="debito"><Bank size={20} weight="duotone"/>Débito</label>
              </div>
             <div>
              <input type="radio" name="pagamento" id="dinheiro" />
             <label htmlFor="dinheiro"><Money size={20} weight="duotone"/>Dinheiro</label>
             </div>
            </div>
          </div>
        </div>
      </form>
    </FormComponent>
  );
}
