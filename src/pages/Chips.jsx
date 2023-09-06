import { useRef, useState, useEffect } from "react";
import '../css/Chips.css';

const Chips = () => {
    const [items, setItems] = useState(Array(30).fill('').map((item, index) => <span>{'Item#' + (index + 1)}</span>));
    const [toShow, setToShow] = useState([]);
    const [textAreaHeight, setTextAreaHeight] = useState();
    const [textAreaWidth, setTextAreaWidth] = useState();
    const [hide, setHide] = useState(true);

    const textArea = useRef(null);
    const innerBlock = useRef(null);

    const observer = useRef(new ResizeObserver((entries) => {
        const { height, width } = entries[0].contentRect;
        setTextAreaHeight(height);
        setTextAreaWidth(width);
    }));

    const showItems = () => {
        let cols = Math.floor(textAreaWidth / 110);
        let rows = Math.floor(textAreaHeight / 40);
        let count = cols * rows;
        setToShow([]);
        let toShowItems = items.slice(0, count - 1);
        setToShow(toShowItems);
    };

    useEffect(() => {
        if (!hide) {
            textArea.current.style.height = innerBlock.current.getBoundingClientRect().height + "px";
            textArea.current.style.resize = "none";
        } else {
            textArea.current.style.height = "300px";
            textArea.current.style.resize = "both";
        }
    }, [hide]);

    useEffect(() => {
        observer.current.observe(textArea.current);
        showItems();
    }, [textAreaHeight, textAreaWidth]);

    return (
        <div>
            <div className="chips">
                <div className="wrapper">
                    <textarea ref={textArea} />
                    <div ref={innerBlock} className="inner">

                        {hide ? toShow : items.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}

                        <button onClick={() => setHide(!hide)} className="hide-button">
                            {hide ? `+${items.length - toShow.length} More...` : 'Hide'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chips;
