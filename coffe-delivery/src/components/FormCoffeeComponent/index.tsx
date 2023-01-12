import { CurrencyDollar, MapPinLine } from "phosphor-react";
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
          <div className="payment-content">
            <CurrencyDollar size={23} weight="bold" />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
        </div>
      </form>
    </FormComponent>
  );
}
