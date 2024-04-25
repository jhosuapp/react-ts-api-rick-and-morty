import { Switch } from './Switch';

const DarkLightMode = ():JSX.Element=>{

    const handleEventDarkLight = (parameter:HTMLInputElement):void=>{
        console.log(parameter);
    }

    return(
        <>
            <Switch handleEvent={ handleEventDarkLight }/>
        </>
    )
}

export { DarkLightMode }