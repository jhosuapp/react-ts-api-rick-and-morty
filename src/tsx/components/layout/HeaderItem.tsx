import { LiHTMLAttributes } from "react";
//types
type PropsCustom = {
    text: string,
    href: string,
}

type PropsNative = LiHTMLAttributes<HTMLLIElement>;

type Props = PropsCustom & PropsNative;

const HeaderItem = ({ text, href, ...PropsLi }: Props):JSX.Element=>{
    return (
        <li { ...PropsLi } >
            <a href={ href } target="_blank">{ text }</a>
        </li>
    )
}

export { HeaderItem }