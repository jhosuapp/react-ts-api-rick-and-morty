import imageHero from '../../assets/png/rick-and-morty.png';
//Types
import { HTMLAttributes } from 'react';
//Components
import { Container } from './Container';

type Props = HTMLAttributes<HTMLImageElement>;

const HeroSection = ( { ...PropsPicture }: Props):JSX.Element=>{
    return (
        <Container className='container'>
            <picture { ...PropsPicture }>
                <img  src={ imageHero } />
            </picture>
        </Container>
    )
}

export { HeroSection }