//React hooks
import { useState } from 'react'
//Types
import type { MouseEventHandler } from 'react';
//Custom types
type Props = {
    handleEvent?: (parameter:HTMLInputElement) => void
}

const Switch = ({ handleEvent } : Props):JSX.Element =>{
    //State checkbox
    const [ checked, setChecked ] = useState<boolean>(false);
    //Event checkbox
    const handleClickCheckbox:MouseEventHandler<HTMLInputElement> = (e):void=>{
        handleEvent && handleEvent(e.target as HTMLInputElement);
        setChecked(!checked);
    }

    return (
        <fieldset className="switch">
            <p>Light mode ({checked ? 'on' : 'off'})</p>
            <label htmlFor="dark-light-mode">
                <input type="checkbox" name="dark-light-mode" id="dark-light-mode" onClick={ handleClickCheckbox }/>
            </label>
        </fieldset>
    )
}

export { Switch }