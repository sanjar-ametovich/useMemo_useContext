import { useRef, useState } from "react";
import '../css/Counter.css';
const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const ref = useRef(null);
  const countNum = (value) => {
    const newIntervalId = setInterval(() => {
      setCount((prevCount) => prevCount + value);
      ref.current.style.color = value > 0 ? 'green' : 'red';
    }, 50);
    setIntervalId(newIntervalId);
  };
  const clearInter = () => {
    clearInterval(intervalId);
    ref.current.style.color = 'black';
  };
  return (
    <div className="counter">
      <button onMouseDown={() => countNum(1)} onMouseUp={clearInter}>+</button>
      <h3 ref={ref}>{count}</h3>
      <button onMouseDown={() => countNum(-1)} onMouseUp={clearInter}>-</button>
    </div>
  );
};
export default Counter;