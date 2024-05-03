import IconLeft from '../../../assets/svg/icon-arrow-left.svg';
import IconRight from '../../../assets/svg/icon-arrow-right.svg';

const Pager = ():JSX.Element =>{
    return (
        <article className="pager">
            <button>
                <img src={ IconLeft } alt="Icon left" />
            </button>
            <ul>
                <li className="active">
                    <p>1</p>
                </li>
                <li>
                    <p>2</p>
                </li>
                <li>
                    <p>3</p>
                </li>
                <li>
                    <p>...</p>
                </li>
                <li>
                    <p>120</p>
                </li>
            </ul>
            <button>
                <img src={ IconRight } alt="Icon Right" />
            </button>
        </article>
    )
}

export { Pager }