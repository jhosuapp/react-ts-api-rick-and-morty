//Components
import { HeroSection } from '../global/HeroSection';
import { Container } from '../global/Container';
import { Pager } from '../functional/Pager';
import { Error } from '../global/Error';
//Home components
import { HomeItem } from './HomeItem';
import { HomeRequest } from './HomeRequest';
import { HomeSearch } from './HomeSearch';
import { Form } from '../functional/Form';
//Axios
import { useEffect, useState } from 'react';
//Global context
import { useGlobalContext } from '../../hooks/useGlobalContext'
//Redux
import type { RootState } from '../../store';
import { useSelector } from 'react-redux';

const Home = ():JSX.Element=>{
    const { counter } = useSelector((state: RootState) => state.counter );

    //Context
    const { error, setError } = useGlobalContext();
    //State    
    const [data, setData] = useState<[ICharacters] | null>(null);
    const [infoData, setInfoData] = useState<IInfo | null>(null);
    const [search, setSearch] = useState<string>('');
    //Get data
    useEffect(()=>{
        HomeRequest(`https://rickandmortyapi.com/api/character?page=${counter}&name=${search}`).then((response)=>{
            const { results, info }= response?.data;
            results ? setData(results) :  setData(null);
            info ? setInfoData(info) : setInfoData(null);
            setError(false);
        }).catch((err:string)=>{
            setData(null);
            setInfoData(null);
            setError(true);
            console.log(err);
        });
    }, [counter, search]);

    return (
        <>
            <HeroSection className="hero-item" />
            <Container className="container--bg">
                <Container className="container list-characters">
                    <Form legend='Find character'  className='full-width custom-input search-characters'>
                        <HomeSearch setSearch={ setSearch } />
                    </Form>
                    { data && data.map((character: ICharacters , index:number) => (
                        <HomeItem character={ character }  key={ index } />
                    )) }
                    { infoData && <Pager info={ infoData }/> }
                    { error && <Error /> }
                </Container>
            </Container>
        </>
    )
}

export { Home }