import { useEffect } from 'react';
import { Switch } from './Switch';

const DarkLightMode = ():JSX.Element=>{
    const light:string | null = localStorage.getItem('light');

    useEffect(()=>{
        light && document.body.classList.add('light');
    }, []);

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