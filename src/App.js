import react from "react";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import { Corpo } from "./componentes/Corpo";
import { Produto } from "./componentes/Produtos";
import { dadosProdutos } from "./componentes/Produtos/dados";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Corpo />
      <Produto titulo= 'Cardapio completo' dados={dadosProdutos}/>
    </Router>
  );
}

export default App;
