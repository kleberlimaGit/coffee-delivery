import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { Home } from "./pages/Home";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <div>
       <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
      <Header/>
        <Home/>
      </CoffeeContextProvider>

      <GlobalStyle />
       </ThemeProvider>
    </div>
  )
}

