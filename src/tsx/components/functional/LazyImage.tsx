//React hooks
import { useState, useRef, useEffect } from "react";
//Types react
import type { ImgHTMLAttributes } from "react";
//Create type
type PropsNative = ImgHTMLAttributes<HTMLImageElement>;
type PropsCustom = { src: string }
type Props = PropsNative & PropsCustom;

const LazyImage = ( { src, ...imgAtr }: Props ):JSX.Element=>{
    //State
    const [currentSrc, setCurrentSrc] = useState<string>('');
    //Node
    const node = useRef<HTMLImageElement>(null);
    useEffect(()=>{
        //Obsever
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setCurrentSrc(src);
                }
            })
        });
        //Validate if exists node
        node.current && observer.observe(node.current);
        //Disconnect oberserver
        return ()=>{
            observer.disconnect();
        }
    }, [src]);
    //Return
    return(
        <img ref={ node } src={ currentSrc } { ...imgAtr } loading="lazy"/>
    )
}

export { LazyImage }