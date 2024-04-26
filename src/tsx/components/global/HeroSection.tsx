import imageHero from '../../../assets/png/rick-and-morty.png';
//Types
import { HTMLAttributes } from 'react';
//Components
import { Container } from './Container';
//Icon
import bg from '../../../assets/svg/bg.svg';

type Props = HTMLAttributes<HTMLImageElement>;

const HeroSection = ( { ...PropsPicture }: Props):JSX.Element=>{
    return (
        <Container className='container hero-section container--relative container--center'>
            <picture { ...PropsPicture }>
                <img  src={ imageHero } alt="hero image"/>
            </picture>
            <picture { ...PropsPicture }>
                <img src={ bg } alt="background hero"/>
            </picture>
        </Container>
    )
}

export { HeroSection }