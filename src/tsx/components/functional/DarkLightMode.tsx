import { Switch } from './Switch';

const DarkLightMode = ():JSX.Element=>{

    const handleEventDarkLight = (parameter:HTMLInputElement):void=>{
        const body = parameter?.closest('body');
        body?.classList.toggle('light');
    }

    return(
        <>
            <Switch handleEvent={ handleEventDarkLight }/>
        </>
    )
}

export { DarkLightMode }