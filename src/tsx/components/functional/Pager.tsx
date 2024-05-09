//Redux
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/slices/counter';
//Icons
import IconLeft from '../../../assets/svg/icon-arrow-left.svg';
import IconRight from '../../../assets/svg/icon-arrow-right.svg';
//Types
type Props = IInfoPager;

const Pager = ({ info }: Props):JSX.Element =>{

    const { counter } = useSelector((state: RootState)=> state.counter );
    const dispatch = useDispatch();

    const { pages, prev, next  } = info;

    return (
        <article className="pager">
            <button className={`${!prev ? 'hidden' : ''}`} onClick={ ()=>{ dispatch(decrement()) } }>
                <img src={ IconLeft } alt="Icon left" />
            </button>
            <ul>
                <li className="active">
                    <p>{`${counter}/${pages}`}</p>
                </li>
            </ul>
            <button className={`${!next ? 'hidden' : ''}`} onClick={ ()=>{ dispatch(increment()) } }>
                <img src={ IconRight } alt="Icon Right" />
            </button>
        </article>
    )
}

export { Pager }