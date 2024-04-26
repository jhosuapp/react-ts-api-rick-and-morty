import type { HTMLAttributes } from "react";

type CustomProps = { text: string }
type NativeProps = HTMLAttributes<HTMLHeadingElement>;
type Props = CustomProps & NativeProps;

const Example = ({ text, ...NativeProps }: Props):JSX.Element=>{
    //Render heading tag
    return( 
        <h1 { ...NativeProps }>{ text }</h1>
    )
}

export { Example }