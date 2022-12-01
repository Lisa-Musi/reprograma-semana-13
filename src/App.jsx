import { Header } from './components/Header';
import { Bio } from './components/Bio';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';
import { Title } from './components/Title';
import { Text } from './components/Text';

import './App.css';

const App = () => (
  <div className="App">
    <Header>
      <Title text='Meus conteúdos favoritos' />
    </Header>
    <Bio />
    <Cards />
    <Footer>
      <Text>Feito por LisA</Text>
    </Footer>
  </div>
);

export default App;