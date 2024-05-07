//Components
import { HeroSection } from '../global/HeroSection';
import { Container } from '../global/Container';
import { Pager } from '../functional/Pager';
//Home components
import { HomeItem } from './HomeItem';
import { HomeRequest } from './HomeRequest';
import { HomeSearch } from './HomeSearch';
import { Form } from '../functional/Form';
//Axios
import { useEffect, useState } from 'react';


const Home = ():JSX.Element=>{
    //State    
    const [data, setData] = useState<[ICharacters] | null>(null);
    const [infoData, setInfoData] = useState<IInfo | null>(null);
    const [counter, setCounter] = useState<number>(1);
    //Get data
    useEffect(()=>{
        HomeRequest(`https://rickandmortyapi.com/api/character?page=${counter}`).then((response)=>{
            const { results, info }= response?.data;
            results ? setData(results) :  setData(null);
            info ? setInfoData(info) : setInfoData(null);
        });
    }, [counter]);

    return (
        <>
            <HeroSection className="hero-item" />
            <Container className="container--bg">
                <Container className="container list-characters">
                    <Form className='full-width'>
                        <HomeSearch />
                    </Form>
                    { data && data.map((character: ICharacters , index:number) => (
                        <HomeItem character={ character }  key={ index } />
                    )) }
                    { infoData && <Pager counter={ counter }  setCounter={ setCounter } info={ infoData }/> }
                </Container>
            </Container>
        </>
    )
}

export { Home }