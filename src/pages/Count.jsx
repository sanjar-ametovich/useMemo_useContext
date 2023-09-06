import {useState} from "react";
import '../css/Count.css'
const Count = () => {
    const [count, setCount] = useState(0)
    const counter = (value) =>{
        if(value === '+'){
            setCount(count+1)
        }else if(value === '-'){
            setCount(count-1)
        }else if(value === '*2'){
            setCount(count*2)
        }else if(value === '/2'){
            setCount(count/2)
        }else if (value === 'reset'){
            setCount(0)
        }
    }
    return (
        <div>
            <div className='count'>
                <p>Counter: {count}</p>
                <button onClick={()=>counter('+')}>+</button>
                <button onClick={()=>counter('-')}>-</button>
                <button onClick={()=> counter('*2')}>X2</button>
                <button onClick={()=>counter('/2')}>/2</button>
                <button onClick={()=>counter('reset')}>Reset</button>
            </div>
        </div>
    );
};

export default Count;