import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({id, title, info, activeId, toggleQuestion}) => {
    // const [showInfo, setShowInfo] = useState(false);
    const isActive = id === activeId;
    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                {/* <button className="question-btn" type="button" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button> */}
                <button className="question-btn" onClick={() => toggleQuestion(id)} type="button">
                    {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header> 
            {/* {showInfo && <p>{info }</p>} */}
            {isActive && <p>{info }</p>}
        </article>
    )
}

export default SingleQuestion;