import '../css/Cards.css';
import {useState} from "react";
const Cards = () => {
    const [tasks, setTasks] = useState([{
        id: 12465,
        img: 'https://hw-use-ref-use-memo-use-context.vercel.app/images/Seattle.jpg',
        text: 'Seattle',
        status: false
    }, {
        id: 45613,
        img: 'https://hw-use-ref-use-memo-use-context.vercel.app/images/Austin.jpg',
        text: 'Austin',
        status: false
    }, {
        id: 45126,
        img: 'https://hw-use-ref-use-memo-use-context.vercel.app/images/San_Francisco.jpg',
        text: 'San Francisco',
        status: false
    }]);
    const [show, setShow] = useState(false)
    const ctrlMouse = (e, id) => {
        if (e.ctrlKey) {
            const updatedTasks = tasks.map((task) => {
                if (task.id === id) {
                    return {...task, status: !task.status};
                }
                return task;
            });
            setTasks(updatedTasks);
        } else {
            return
        }
    }
    const toggleAll = () => {
        setTasks((prev) => prev.map((item) => ({
            ...item, status: !item.status
        })))
    }
    const selectedTasks = tasks.filter((item) => item.status === true)
    return (
        <div>
            <div className="cards">
                <div className="cards-header">
                    <h2>Select a travel destination</h2>
                    <div>
                        <span onClick={() => setShow(true)}>Submit</span>
                        <span onClick={toggleAll}>Toggle All</span>
                    </div>
                </div>
                <div className="cards-block">
                    {tasks.map((item) => (<div key={item.id} id={item.id} onClick={(e) => ctrlMouse(e, item.id)} className={`card ${item.status ? 'active' : ''}`}>
                        <img src={item.img} alt={item.text}/>
                        <p>{item.text}</p>
                    </div>))}
                </div>
            </div>
            <div className={`modal ${show ? 'show' : 'hide'}`}>
                <div className="modal-block">
                    <div className="modal-text">
                        <h2>Selected travels</h2>
                        <span onClick={() => setShow(false)} className="modal-close">x</span>
                    </div>
                    <div className="modal-list">
                        {selectedTasks.map((item) => (<div key={item.id} className="modal-card">
                            <img src={item.img} alt={item.text}/>
                            <p>{item.text}</p>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cards;