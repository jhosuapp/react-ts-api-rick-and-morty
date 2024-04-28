import { useContext, useEffect } from 'react';
import { Switch } from './Switch';
//Context
import { GlobalContext } from '../../context/GlobalContext';

const DarkLightMode = ():JSX.Element=>{
    //My context
    const { globalLight } = useContext(GlobalContext) || {};
    //Validate light cls
    useEffect(()=>{
        const body:HTMLElement = document.body;
        globalLight ? body.classList.add('light') : body.classList.remove('light');
    }, []);
    //Handler for event
    const handleEventDarkLight = (parameter:HTMLInputElement):void=>{
        const body = parameter.closest('body');
        body?.classList.toggle('light');
        body?.classList.contains?.('light') ? localStorage.setItem('light', 'light') : localStorage.removeItem('light');
    }

    return(
        <>
            <Switch name_input='dark-light' handleEvent={ handleEventDarkLight }/>
        </>
    )
}

export { DarkLightMode }