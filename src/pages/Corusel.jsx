import '../css/Corusel.css'
import {useEffect, useRef, useState} from "react";
const Corusel = () => {
    const [scrollHeight, setScrollHeight] = useState(0)
    const ref = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const scrollTop = ref.current.scrollTop;
                setScrollHeight(scrollTop);
            }
        };
        if (ref.current) {
            ref.current.addEventListener("scroll", handleScroll);
        }
    }, []);
    const scroll = Math.floor(scrollHeight / 5.3)
    return (
        <div>
            <div className={'corusel'}>
                <div className={'corusel-title'}>
                    <h4>Hello</h4>
                    <div className="corusel-title-block">
                        <ul className="corusel-title-list" style={{ top: `${-scroll}px` }}>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/1.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/2.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/3.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/4.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/5.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/6.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/7.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/8.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/9.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/10.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/11.png"/></li>
                            <li><img src="https://hw-use-ref-use-memo-use-context.vercel.app/images/12.png"/></li>
                        </ul>
                    </div>
                    <h4>come in</h4>
                </div>
                <div className='corusel-block' ref={ref}>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/1.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/2.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/3.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/4.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/5.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/6.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/7.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/8.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/9.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/10.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/11.png"/></div>
                    <div className='corusel-item'><img
                        src="https://hw-use-ref-use-memo-use-context.vercel.app/images/12.png"/></div>
                </div>
            </div>
        </div>
    );
};
export default Corusel;
