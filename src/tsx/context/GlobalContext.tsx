//Hooks react
import { createContext, ReactNode, useState } from "react";
//Types
type Props = { children: ReactNode }
//Types context
type ContextType = {
    error: boolean,
    setError: (parameter:boolean)=> void,
}


const GlobalContext = createContext<ContextType | undefined>(undefined);
 
const GlobalProvider = ({ children }: Props)=>{
    //States
    const [error, setError] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{
            error, 
            setError
        }}>
            { children }
        </GlobalContext.Provider>
    );
}


export { GlobalContext, GlobalProvider }