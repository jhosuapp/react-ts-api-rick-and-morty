//React types
import type { ReactNode, FormHTMLAttributes } from "react";
//Props
type PropsCustom = FormHTMLAttributes<HTMLFormElement>;
type PropsReact = { children: ReactNode }
type props = PropsCustom & PropsReact;

const Form = ({ children, ...formAtr }: props):JSX.Element=>{
    return(
        <form { ...formAtr }>
            { children }
        </form>
    )
}

export { Form }