
import Banner from './componentes/Banner/Banner'; //Isso é a estrutura de importação do componente que eu criei. Importa como uma TAG
import CampoTexto from './componentes/CampoTexto'; //Neste import, eu não precisei de CampoTexto/CampoTexto.js... Pelo simples fato de ter renomeado pra index.js lá... É um bom macete.

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>

    </div>
  );
}

export default App;
