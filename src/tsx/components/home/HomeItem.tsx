import { Link } from "react-router-dom"

const HomeItem = ():JSX.Element=>{
    return (
        <Link to="/character/231312">
            <picture>
                <img src="https://rickandmortyapi.com/api/character/avatar/132.jpeg" alt="image" />
            </picture>
            <ul>
                <li>
                    <h2>Gar's Mytholog</h2>
                    <h5>dead - Mythological Creature</h5>
                </li>
                <li>
                    <p>Last known location:</p>
                    <p>Nuptia 4</p>
                </li>
                <li>
                    <p>First seen in:</p>
                    <p>Big trouble in little Sanchez</p>
                </li>
            </ul>
        </Link>
    )
}

export { HomeItem }