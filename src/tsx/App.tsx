import { HashRouter } from 'react-router-dom';
//Layout
import { Header } from "./components/layout/Header";
//Routing
import { Routing } from './routes/Routes';

function App() {

  return (
    <HashRouter>
      <Header />
      <main>
        <Routing />
      </main>
    </HashRouter>
  )
}

export default App;
