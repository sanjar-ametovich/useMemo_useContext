import { useState } from 'react';
import '../css/Check.css';
const Check = () => {
    const [status, setStatus] = useState(['In process', 'In process', 'In process']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleButtonClick = () => {
        if (currentIndex < status.length) {
            setCurrentIndex(currentIndex + 1);
            status[currentIndex] = 'Delivered';
            setStatus(status);
        }
    };
    return (
        <div>
            <div className="check">
                <div className="check-block">
                    <ul>
                        {status.map((status, index) => (
                            <li key={index}>{status}</li>
                        ))}
                    </ul>
                    <button onClick={handleButtonClick}>Special button</button>
                </div>
            </div>
        </div>
    );
};
export default Check;
