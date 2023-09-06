import '../css/Input.css'
import { useRef, useState } from "react";

const Input = () => {
    const [task, setTask] = useState('Task')
    const ref = useRef(null)

    const showInput = (value) => {
        value ? ref.current.style.display = 'block' : ref.current.style.display = 'none';
    };

    return (
        <div>
            <div className="input">
                <div className="input-btn">
                    <button onClick={()=>showInput(true)} className="input-buttons">Show</button>
                    <button onClick={()=>showInput(false)} className="input-buttons">Hide</button>
                </div>
                <p>An input field!</p>
                <input ref={ref} type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
        </div>
    );
};

export default Input;
