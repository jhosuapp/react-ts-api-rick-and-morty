//Types react
import type { ChangeEventHandler } from 'react';
//Props
type Props = { setSearch: (parameter:string) => void }

const HomeSearch = ({ setSearch }: Props):JSX.Element=>{
    //Handle event
    const handleChange:ChangeEventHandler<HTMLInputElement> = (e):void=>{
        setSearch(e.target.value);
    }

    return(
        <fieldset>
            <input type="search" onChange={ handleChange } placeholder='Buscar por el nombre del personaje' name="search" id="search" />
        </fieldset>
    )
}

export { HomeSearch }