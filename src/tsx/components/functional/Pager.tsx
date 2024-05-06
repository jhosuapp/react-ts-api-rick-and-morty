import IconLeft from '../../../assets/svg/icon-arrow-left.svg';
import IconRight from '../../../assets/svg/icon-arrow-right.svg';

type ICounter = {
    counter: number,
    setCounter: (parameter:number)=> void,
}

type Props = ICounter & IInfoPager;


const Pager = ({ info, setCounter, counter }: Props):JSX.Element =>{

    const { pages, prev, next  } = info;

    const handleClick = (page: number)=>{
        setCounter(counter + page)
    }

    return (
        <article className="pager">
            <button className={`${!prev ? 'hidden' : ''}`} onClick={ ()=>{ handleClick(-1) } }>
                <img src={ IconLeft } alt="Icon left" />
            </button>
            <ul>
                <li className="active">
                    <p>{`${counter}/${pages}`}</p>
                </li>
            </ul>
            <button className={`${!next ? 'hidden' : ''}`} onClick={ ()=>{ handleClick(1) } }>
                <img src={ IconRight } alt="Icon Right" />
            </button>
        </article>
    )
}

export { Pager }