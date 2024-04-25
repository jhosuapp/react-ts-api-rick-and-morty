//Header item &&  hamburger
import { HeaderItem } from "./HeaderItem";
import { HeaderHamburger } from "./HeaderHamburger";
//Routes
import { Link } from "react-router-dom"
//Icon
import logo from '../../../assets/svg/logo.svg';

const Header = ():JSX.Element=>{
    return (
        <header>
            <Link to={'/'}>
                <img src={ logo } alt="Logo" />
            </Link>
            <nav>
                <ul>
                    <HeaderItem text={'Github'} href={'https://github.com/jhosuapp'} />
                    <HeaderItem text={'Linkedin'} href={'https://www.linkedin.com/in/jhosua-penagos-0b7b7b202/'} />
                    <HeaderItem className={'btn'}  text={'Documentation'} href={'https://rickandmortyapi.com/documentation'} />
                </ul>
            </nav>
            <HeaderHamburger />
        </header>
    )
}

export { Header }