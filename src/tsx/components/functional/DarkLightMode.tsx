import { useEffect } from 'react';
import { Switch } from './Switch';
//Context

const DarkLightMode = ():JSX.Element=>{
    //Validate light cls when load page
    useEffect(()=>{
        const body:HTMLElement = document.body;
        localStorage.getItem('light') ? body.classList.add('light') : body.classList.remove('light');
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