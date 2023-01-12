import { FormCoffeeComponent } from "../../../components/FormCoffeeComponent";
import { OrderContainer } from "./styles";

export function OrderCoffee() {
    return (

           <OrderContainer>
             <div>
                <h3>Complete seu Pedido</h3>
                <FormCoffeeComponent/>             
            </div>
            <div>
                <h4>Cafés Selecionados</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores similique amet, sit natus esse placeat aut commodi sed non vel laudantium alias ducimus itaque recusandae praesentium id consequuntur. Repudiandae?</div>   
           </OrderContainer> 
    )
}