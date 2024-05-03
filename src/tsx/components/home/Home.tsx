//Components
import { HeroSection } from '../global/HeroSection';
import { Container } from '../global/Container';
import { Pager } from '../functional/Pager';
//Home components
import { HomeItem } from './HomeItem';
import { HomeRequest } from './HomeRequest';
//Axios
import { useEffect, useState } from 'react';


const Home = ():JSX.Element=>{

    //State    
    const [data, setData] = useState<Array<{}>>([]);
    //Get data
    useEffect(()=>{
        HomeRequest().then((response)=>{
            setData(response.data.results);
        }).catch((error)=>{
            console.log(error);
        });
    }, []);

    return (
        <>
            <HeroSection className="hero-item" />
            <Container className="container--bg">
                <Container className="container list-characters">
                    {data.map((character, index:number) => (
                        <HomeItem key={index} />
                    ))}
                    <Pager />
                </Container>
            </Container>
        </>
    )
}

export { Home }