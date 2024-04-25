import { HashRouter } from 'react-router-dom';
//Layout
import { Header } from './components/layout/Header';
import { Settings } from './components/functional/Settings';
//Routing
import { Routing } from './routes/Routes';

function App() {

  return (
    <HashRouter>
      <Header />
      <Settings />
      <main>
        <Routing />
      </main>
    </HashRouter>
  )
}

export default App;
