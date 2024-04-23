import { Example } from './components/Example';
import type { MouseEventHandler } from 'react';

function App() {

  const handleClick:MouseEventHandler<HTMLHeadingElement> = (e):void =>{
      console.log(e);
  }

  return (
    <>
      <Example onClick={ handleClick }  className='test' text={"Hola mundo"} />
    </>
  )
}

export default App;
