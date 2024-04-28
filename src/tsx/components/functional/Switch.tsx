//React hooks
import { useEffect, useRef, useState } from 'react'
//Types
import type { MouseEventHandler } from 'react';
//Custom types
type Props = {
    name_input: string
    handleEvent?: (parameter:HTMLInputElement) => void
}

const Switch = ({ handleEvent, name_input } : Props):JSX.Element =>{
    //State checkbox and ref checkbox
    const [ checked, setChecked ] = useState<boolean>(localStorage.getItem(name_input) ? true : false);
    const node = useRef<HTMLInputElement>(null);
    //Event checkbox
    const handleClickCheckbox:MouseEventHandler<HTMLInputElement> = (e):void=>{
        //Function dinamic how prop
        handleEvent && handleEvent(e.target as HTMLInputElement);
        //Update state for checked
        setChecked(!checked);
        //Remove o add state for checked input
        !checked ? localStorage.setItem(name_input, 'checked') : localStorage.removeItem(name_input);
    }
    //Validate if input exists and is checked in local
    useEffect(()=>{
        if(node && localStorage.getItem(name_input)){
            node.current?.setAttribute('checked', 'checked');
        }
    }, []);

    return (
        <fieldset className="switch">
            <p>Light mode ({checked ? 'on' : 'off'})</p>
            <label htmlFor={`check-${name_input}`}>
                <input 
                    type="checkbox" 
                    name={`check-${name_input}`} 
                    id={`check-${name_input}`} 
                    onClick={ handleClickCheckbox }
                    ref={ node }
                />
            </label>
        </fieldset>
    )
}

export { Switch }