import { Routes, Route } from 'react-router-dom';
//Home
import { Home } from '../components/home/Home';
import { Character } from '../components/character/Character';

const Routing = ()=>{
    return( 
        <Routes>
            {/* Home page */}
            <Route path={'/'} element={ <Home /> }></Route>
            {/* Detail character */}
            <Route path={'/character/:id'} element={ <Character /> }></Route>
        </Routes>
    );
}

export { Routing }