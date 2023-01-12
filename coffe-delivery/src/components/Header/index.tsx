import LogoCoffee from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { HeaderComponent } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import VAR from "../../env";
import axios from "axios";

interface Location {
  city?: string;
  state?: string;
}

interface Coords {
  latitude?: number;
  longitude?: number;
}

export function Header() {
  const [location, setLocation] = useState<Location>({});

  async function getLocation() {
    
    navigator.geolocation.getCurrentPosition((position) => {
       axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${VAR.OPENCAGE_API_KEY}`
      )
      .then((response) => {
        const city = response.data.results[0].components.city;
        const state = response.data.results[0].components.state_code;
        setLocation({ city:city, state:state });
      });
    });
  }


  useEffect(() => {
    getLocation();
  }, []);

  const { alert } = useContext(CoffeeContext);
  return (
    <HeaderComponent>
      <img src={LogoCoffee} alt="" />

      <div>
        <span>
          <MapPin size={18} weight="fill" />
          {`${location.city}, ${location.state}`}
        </span>
        <button className="shoppingCart" type="button">
          <span className={`shoppingCart-alert ${alert > 0 ? "active" : ""}`}>
            {alert}
          </span>
          <ShoppingCart size={18} weight="fill" />
        </button>
      </div>
    </HeaderComponent>
  );
}
