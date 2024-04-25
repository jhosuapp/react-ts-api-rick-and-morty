//Components
import { HeroSection } from "../../components/HeroSection";;
import { Container } from "../Container";

const Home = ():JSX.Element=>{
    return (
        <>
            <HeroSection className="hero-item" />
            <Container className="container--bg">
                <Container className="container">
                    <p>hola</p>
                </Container>
            </Container>
        </>
    )
}

export { Home }