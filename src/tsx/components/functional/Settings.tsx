//React hooks
import { useState } from 'react';
//Components
import { DarkLightMode } from './DarkLightMode';
//Icon
import icon from '../../../assets/svg/settings.svg';

const Settings = ():JSX.Element=>{
    //state
    const [settings, setSettings] = useState<boolean>(false);
    //Handle click
    const handelClick = ():void=>{
        setSettings(!settings);
    }

    return (
        <section className={`settings ${settings && 'active'}`}>
            <article onClick={ handelClick }>
                <picture>
                    <img src={ icon } alt="icon settings" />
                </picture>
            </article>
            <article onClick={ handelClick } id="close-settings"></article>
            <article>
                <DarkLightMode />
            </article>
        </section>
    )
}

export { Settings }