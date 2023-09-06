import { useRef, useState } from "react";
import '../css/Selector.css';

const Selector = () => {
    const [open, setOpen] = useState(true);
    const [head, setHead] = useState('');
    const ref = useRef(null);

    const selectorMenu = (value) => {
        if (value === 'Bacon') {
            setHead('Bacon');
        } else if (value === 'Tuna') {
            setHead('Tuna');
        } else if (value === 'Pants') {
            setHead('Tuna pants');
        }
        setOpen(false);
        toggleMenu()
    };

    const toggleMenu = () => {
        setOpen(prevOpen => !prevOpen);
        if(open === true){
            ref.current.style.display = 'block'
        }else{
            ref.current.style.display = 'none'
        }
    };

    return (
        <div>
            <div className="selector">
                <h3>Selected: {head}</h3>
                <button onClick={toggleMenu} className="selector-btn">OPEN MENU</button>
                <ul ref={ref} className={`selector-menu`}>
                    <li onClick={() => selectorMenu('Bacon')}>Bacon</li>
                    <li onClick={() => selectorMenu('Tuna')}>Tuna</li>
                    <li onClick={() => selectorMenu('Pants')}>Tuna pants</li>
                </ul>
            </div>
        </div>
    );
};

export default Selector;
