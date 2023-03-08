import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";

export default function Navbar(props) {
    const { scrollYProgress } = useScroll()
    const [revealFactor, setRevealFactor] = useState(0)

    useEffect(() => {
        function updateOpacity() {
            setRevealFactor(scrollYProgress.current - 0.5)
                console.log(scrollYProgress.current - 0.5, ' is something1')
        }
        const unsubscribeY = scrollYProgress.on("change", updateOpacity)
        return () => {
          unsubscribeY()
        }
    }, [scrollYProgress])
    return (
        <>
            <div className='flex w-full px-24 z-[50] items-end justify-between bg-transparent fixed' style={revealFactor>=-0.18761 && revealFactor<=-0.0263323 ? {
                paddingTop: props.paddingTop,
                color: 'black',
            }:{
                paddingTop: props.paddingTop,
                color: 'white',
            }
            }>
                <div className='flex items-center justify-center'>
                    <img src={props.name} className={props.width} alt='hribhav_signature'/>
                </div>
                <div className='flex items-center justify-center text-[0.8rem] font-PoR'>
                    <a className='my-0 px-6 cursor-pointer' href='/'>My Work</a>
                    <a className='my-0 px-6 cursor-pointer' href='/not_work'>My Not Work</a>
                    <a className='my-0 px-6 cursor-pointer' href='/about'>About Me</a>
                    <a className='my-0 pl-6 cursor-pointer' href='/resume'>Resume</a>
                </div>
            </div>
        </>
    )
}