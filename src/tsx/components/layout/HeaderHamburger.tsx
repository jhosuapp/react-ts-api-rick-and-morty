//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setHamburger } from '../../store/slices/hamburger';
import type { RootState } from '../../store';
//React hooks
import { useRef } from "react";

const HeaderHamburger = ():JSX.Element =>{
    //Store
    const dispatch = useDispatch();
    const { hamburger } = useSelector((state: RootState) => state.hamburger );
    //Ref
    const node = useRef<HTMLDivElement>(null);
    //Handle
    const handleClick = ():void=>{
        const header = node.current?.parentElement;
        dispatch(setHamburger());
        hamburger ? header?.classList.remove('active') : header?.classList.add('active');
    }

    return (
        <div ref={ node }  onClick={ handleClick }  className={`hamburger ${hamburger && 'active'}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export { HeaderHamburger }