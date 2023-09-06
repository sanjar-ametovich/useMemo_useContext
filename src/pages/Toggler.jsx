import { useState, useRef } from "react";
import "../css/Toggler.css";

const Toggler = () => {
    const [toggle, setToggle] = useState(false);
    const square1 = useRef(null)
    const square2 = useRef(null)
    const square3 = useRef(null)
    const animation = () => {
            if(toggle) {

            setTimeout(() => {
                square1.current.classList.remove("redStart");

                square1.current.classList.add("redEnd");
            }, 1000);
            setTimeout(() => {
                square2.current.classList.remove("violetStart");

                square2.current.classList.add("violetEnd");
            }, 2000);
            setTimeout(() => {
                square3.current.classList.remove("whiteStart");
                square3.current.classList.add("whiteEnd");
            }, 3000);
        }else {
            setTimeout(() => {
                square3.current.classList.remove("whiteEnd");
                square3.current.classList.add("whiteStart");
            }, 1000);
            setTimeout(() => {
                square2.current.classList.remove("violetEnd");

                square2.current.classList.add("violetStart");
            }, 2000);
            setTimeout(() => {
                square1.current.classList.remove("redEnd");

                square1.current.classList.add("redStart");
            }, 3000);
        }
    };

    const toggler = () => {
        setToggle((prevToggle) => !prevToggle);
        animation()
    };

    return (
        <div>
            <div className="toggle">
                <div className="toggle-block">
                    <div ref={square1} className={`red`}></div>
                    <div ref={square2} className={`violet`}></div>
                    <div ref={square3} className={`white`}></div>
                    <button onClick={toggler} className="button">
                        Toggle
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Toggler;
