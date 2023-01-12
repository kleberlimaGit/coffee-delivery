import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface Coffee {
  id: string;
  img: string;
  type: string[];
  name: string;
  description: string;
  value: number;
  amount: number;
  isChoice: boolean;
}

interface CoffeeContextData {
  coffee: Coffee[];
  reduceAmountValue: (id: string) => void;
  incrementAmountValue: (id: string) => void;
  alert: number;
}

export const CoffeeContext = createContext({} as CoffeeContextData);

interface CoffeeContextProvidesProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProvidesProps) {
  const [coffee, setCoffee] = useState<Coffee[]>([]);
  const [alert, setAlert] = useState(0);

  async function getCoffee() {
    const response = await axios.get("http://localhost:3333/coffees");
    setCoffee(response.data);
  }

  useEffect(() => {
    getCoffee();
  }, []);
 
  function reduceAmountValue(id: string) {
    setCoffee((state) =>
      state.map((cof) => {
        if (id === cof.id && cof.amount === 0) {
            setAlert(alert - 1)
          return { ...cof, amount: cof.amount--, isChoice: false };
        } else if (id === cof.id && cof.amount > 0) {
          return { ...cof, amount: cof.amount-- };
        } else {
          return cof;
        }
      })
    );
  }

  function incrementAmountValue(id: string) {
    setCoffee((state) =>
      state.map((cof) => {
        if (id === cof.id && cof.amount === 0) {
          setAlert(alert + 1)
          return { ...cof, amount: ++cof.amount, isChoice: true };
        } else if (id === cof.id && cof.amount > 0) {
          return { ...cof, amount: cof.amount++ };
        } else {
          return cof;
        }
      })
    );
  }

  return (
    <CoffeeContext.Provider
      value={{ coffee, reduceAmountValue, incrementAmountValue, alert }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
