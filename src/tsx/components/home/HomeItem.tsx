//React hook
import { Link } from "react-router-dom";
//Lazy image component
import { LazyImage } from '../functional/LazyImage';

const HomeItem = ({ character }: ICharacter ):JSX.Element=>{

    const { id, name, status, species, image, location:{ name:nameLocation }, origin: { name:nameOrigin } } = character;

    return (
        <Link to={`/character/${ id }`}>
            <picture>
                <LazyImage src={image} alt={ name } />
            </picture>
            <ul>
                <li>
                    <h2>{ name }</h2>
                    <h5>{ status } - { species }</h5>
                </li>
                <li>
                    <p>Last known location:</p>
                    <p>{ nameLocation }</p>
                </li>
                <li>
                    <p>Origin:</p>
                    <p>{ nameOrigin }</p>
                </li>
            </ul>
        </Link>
    )
}

export { HomeItem }