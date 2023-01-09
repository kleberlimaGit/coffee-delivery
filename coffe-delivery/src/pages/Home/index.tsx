import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeePrincipal from "../../assets/coffee-principal.svg";
import { BeneficityColor, MainComponent, SectionComponent } from "./styles";
import { Coffe } from "../../components/Coffe";

export function Home() {
  return (
    <>
      <MainComponent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <div className="beneficity">
              <BeneficityColor colorProps="burlywood">
                <ShoppingCart size={15} weight="fill" />
              </BeneficityColor>
              <span>Compra simples e segura</span>
            </div>
            <div className="beneficity">
              <BeneficityColor colorProps="green">
                <Package size={15} weight="fill" />
              </BeneficityColor>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="beneficity">
              <BeneficityColor colorProps="sage">
                <Timer size={15} weight="fill" />
              </BeneficityColor>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="beneficity">
              <BeneficityColor colorProps="yellow">
                <Coffee size={15} weight="fill" />
              </BeneficityColor>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <img src={CoffeePrincipal} alt="" />
      </MainComponent>
      <SectionComponent>
        <h2>Nossos cafés</h2>
        <div className="container">
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
          <Coffe/>
        </div>
      </SectionComponent>
    </>
  );
}
