import { ThemeProvider } from "styled-components";
import { FormCoffeeComponent } from "./pages/FormCoffee";
import { Header } from "./components/Header";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <CoffeeContextProvider>
          <Header />
          <FormCoffeeComponent/>
        </CoffeeContextProvider>

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
