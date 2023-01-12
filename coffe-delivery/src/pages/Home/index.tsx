import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeePrincipal from "../../assets/coffee-principal.svg";
import { BeneficityColor, MainComponent, SectionComponent } from "./styles";
import { Coffe } from "../../components/Coffe";
import { useContext} from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";



export function Home() {
  const {coffee} = useContext(CoffeeContext)

  
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
          {coffee.map((cof) => {
            return (
              <div key={cof.id}>
                <Coffe
                  id={cof.id}
                  amount={cof.amount}
                  img={cof.img}
                  name={cof.name}
                  type={cof.type}
                  description={cof.description}
                  value={cof.value}
                />
              </div>
            );
          })}
        </div>
      </SectionComponent>
    </>
  );
}
