//Redux
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/slices/search';
//Types react
import type { ChangeEventHandler } from 'react';

const HomeSearch = ():JSX.Element=>{
    //Store
    const dispatch = useDispatch();
    //Handle event
    const handleChange:ChangeEventHandler<HTMLInputElement> = (e):void=>{
        dispatch(setSearch(e.target.value));
    }

    return(
        <fieldset>
            <input type="search" onChange={ handleChange } placeholder='Buscar por el nombre del personaje' name="search" id="search" />
            <h4>Showing 20 results per page</h4>
        </fieldset>
    )
}

export { HomeSearch }