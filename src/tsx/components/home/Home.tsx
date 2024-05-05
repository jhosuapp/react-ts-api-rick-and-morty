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
    const [data, setData] = useState<[ICharacters] | null>(null);
    const [infoData, setInfoData] = useState<IInfo | null>(null);
    //Get data
    useEffect(()=>{
        HomeRequest().then((response)=>{
            const { results, info }= response?.data;
            results ? setData(results) :  setData(null);
            info ? setInfoData(info) : setInfoData(null);
        });
    }, []);

    return (
        <>
            <HeroSection className="hero-item" />
            <Container className="container--bg">
                <Container className="container list-characters">
                    { data && data.map((character: ICharacters , index:number) => (
                        <HomeItem character={ character }  key={ index } />
                    )) }
                    { infoData && <Pager info={ infoData }/> }
                </Container>
            </Container>
        </>
    )
}

export { Home }