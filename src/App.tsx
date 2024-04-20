import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/header";
import Home from "./pages/home";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
