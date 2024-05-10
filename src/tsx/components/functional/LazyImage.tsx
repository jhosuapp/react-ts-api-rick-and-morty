//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setImage } from '../../store/slices/lazyImage';
import { RootState } from '../../store/';
//React hooks
import { useRef, useEffect } from 'react';
//Types react
import type { ImgHTMLAttributes } from 'react';
//Create type
type PropsNative = ImgHTMLAttributes<HTMLImageElement>;
type PropsCustom = { src: string }
type Props = PropsNative & PropsCustom;


const LazyImage = ( { src, ...imgAtr }: Props ):JSX.Element=>{
    //Redux image
    const loadedImage = useSelector((state: RootState) => state.lazyImage.images[src]);
    const dispatch = useDispatch();
    //Node
    const node = useRef<HTMLImageElement>(null);
    useEffect(()=>{
        //Obsever
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    dispatch(setImage({ image: src }));
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
        <img ref={ node } src={ loadedImage } { ...imgAtr } loading="lazy"/>
    )
}

export { LazyImage }