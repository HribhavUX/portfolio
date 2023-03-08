import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";

export default function  SocialMediaNavbar(props){
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
        <div className='flex justify-start fixed left-[0vw] bottom-0 z-40'>
            <div className='w-full relative flex flex-col px-20 items-start font-PoR'
            >
                <a className='text-[0.8rem] -rotate-90  pl-0 pr-0' style={((revealFactor>=-0.27179442) && (revealFactor<=-0.11051839)) ? {
                        color: 'black',
                        opacity: props.opacity,
                    }: {
                    color: 'white',
                    opacity: props.opacity,
                }} href='/'>Instagram</a>
                <a className=' -rotate-90 text-[0.8rem] ml-2 mt-24' style={revealFactor>=-0.2953407 && revealFactor<=-0.13422597 ? {
                        color: 'black',
                        opacity: props.opacity,
                    }: {
                    color: 'white',
                    opacity: props.opacity,
                }} href='/'>LinkedIn</a>
                <div className='flex justify-start mt-10'>
                    <a className='-rotate-90 text-[0.8rem] p-0 pt-16' style={revealFactor>=-0.30840408 && revealFactor<=-0.14777317 ? {
                        color: 'black',
                        opacity: props.opacity,
                    }: {
                    color: 'white',
                    opacity: props.opacity,
                }} href='/'>Twitter</a>
                    <img id={props.id} style={props.style} src={props.image} className={props.classname} alt='Social Media Navbar'/>
                </div>
            </div>
        </div>
    )
}