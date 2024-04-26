import { useContext } from 'react';
import { Switch } from './Switch';
//Context
import { GlobalContext } from '../../context/GlobalContext';

const DarkLightMode = ():JSX.Element=>{
    //My context
    const { globalLight } = useContext(GlobalContext) || {};
    //Validate if globallight exists
    globalLight && document.body.classList.add('light');
    //Handler for event
    const handleEventDarkLight = (parameter:HTMLInputElement):void=>{
        const body = parameter?.closest('body');
        body?.classList.toggle('light');
        body?.classList.contains?.('light') ? localStorage.setItem('light', 'light') : localStorage.removeItem('light');
    }

    return(
        <>
            <Switch handleEvent={ handleEventDarkLight }/>
        </>
    )
}

export { DarkLightMode }