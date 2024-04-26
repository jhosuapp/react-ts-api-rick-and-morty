import { HashRouter } from 'react-router-dom';
//Layout
import { Header } from './components/layout/Header';
import { Settings } from './components/functional/Settings';
//Routing
import { Routing } from './routes/Routes';
//Context
import { GlobalProvider } from './context/GlobalContext';

function App() {

  return (
    <GlobalProvider>
      <HashRouter>
        <Header />
        <Settings />
        <main>
          <Routing />
        </main>
      </HashRouter>
    </GlobalProvider>
  )
}

export default App;
