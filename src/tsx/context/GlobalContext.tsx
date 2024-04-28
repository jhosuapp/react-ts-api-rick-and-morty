//Hooks react
import { createContext, ReactNode, useState } from "react";
//Types
type Props = { children: ReactNode }
//Types context
type ContextType = {
    globalLight: string,
    setGlobalLight: (parameter:string)=> void,
}


const GlobalContext = createContext<ContextType | undefined>(undefined);
 
const GlobalProvider = ({ children }: Props)=>{
    //States
    const [globalLight, setGlobalLight] = useState<string>(localStorage.getItem('light') || '');

    return (
        <GlobalContext.Provider value={{
            globalLight, 
            setGlobalLight
        }}>
            { children }
        </GlobalContext.Provider>
    );
}


export { GlobalContext, GlobalProvider }