//Router hook
import { Link } from 'react-router-dom';
//Components
import { HeroSection } from '../global/HeroSection';
import { Container } from '../global/Container';
import { Pager } from '../functional/Pager';

const Home = ():JSX.Element=>{
    return (
        <>
            <HeroSection className="hero-item" />
            <Container className="container--bg">
                <Container className="container list-characters">
                    {/* Item */}
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
                    {/* Item */}
                    <Pager />
                </Container>
            </Container>
        </>
    )
}

export { Home }