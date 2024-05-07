//React types
import type { ReactNode, FormHTMLAttributes } from "react";
//Props
type PropsCustom = FormHTMLAttributes<HTMLFormElement>;
type PropsReact = { children: ReactNode, legend?: string }
type props = PropsCustom & PropsReact;

const Form = ({ children, legend, ...formAtr }: props):JSX.Element=>{
    return(
        <form { ...formAtr }>
            { legend && <legend>{ legend }</legend> }
            { children }
        </form>
    )
}

export { Form }