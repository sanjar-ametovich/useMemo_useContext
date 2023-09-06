import {useState} from "react";
import Toggler from "./pages/Toggler.jsx";
import '../src/css/App.css'
import Counter from "./pages/Counter.jsx";
import Corusel from "./pages/Corusel.jsx";
import Count from "./pages/Count.jsx";
import Cards from "./pages/Cards.jsx";
import Input from "./pages/Input.jsx";
import Selector from "./pages/Selector.jsx";
import Check from "./pages/Check.jsx";
import Chips from "./pages/Chips.jsx";
function App() {
    const [block, setBlock] = useState('Toggler')
    const btn = (selectBlock) => {
        setBlock(selectBlock)
    }
    return (
        <>
            <h1>Home work(useRef, useMemo, useContext)</h1>
            <div className='button-block'>
                <div className='button-item'>
                    <button onClick={() => btn('Toggler')} className='button-click'>Toggler</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Chips')} className='button-click'>Chips</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Counter')} className='button-click'>Counter</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Corusel')} className='button-click'>Corusel</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Cards')} className='button-click'>Cards</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Saver')} className='button-click'>Input saver</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Count')} className='button-click'>Count</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Selector')} className='button-click'>Selector</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Check')} className='button-click'>Check</button>
                </div>
            </div>
            {block === 'Toggler' && <Toggler/>}
            {block === 'Chips' && <Chips/>}
            {block === 'Counter' && <Counter/>}
            {block === 'Corusel' && <Corusel/>}
            {block === 'Cards' && <Cards/>}
            {block === 'Saver' && <Input/>}
            {block === 'Count' && <Count/>}
            {block === 'Selector' && <Selector/>}
            {block === 'Check' && <Check/>}
        </>
    )
}

export default App
