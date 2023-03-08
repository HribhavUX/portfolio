import Sace_background1 from "../../Assets/Sace_background1.png";
import Sace_background2 from "../../Assets/Sace_background2.png";
import Sace_background3 from "../../Assets/Sace_background3.png";
import Sace_background4 from "../../Assets/Sace_background4.png";
import {useTransform, motion, useScroll} from "framer-motion";
import {useEffect, useState} from "react";

export default function Sace(props){
    const xposition1 = useTransform(props.x,[0,2000],[0,40]);
    const xposition2 = useTransform(props.x,[0,2000],[0,60]);
    const xposition3 = useTransform(props.x,[0,2000],[0,80]);

    const yposition1 = useTransform(props.y,[0,8000],[-90,150]);
    const yposition2 = useTransform(props.y,[0,10000],[-50,150]);
    const yposition3 = useTransform(props.y,[0,8000],[-50,150]);
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, []);
    const { scrollYProgress } = useScroll()
    const [revealFactor, setRevealFactor] = useState(0)

    useEffect(() => {
        function updateOpacity() {
            setRevealFactor(scrollYProgress.current - 0.5)
            console.log(scrollYProgress.current - 0.5, ' is something6')
        }

        const unsubscribeY = scrollYProgress.on("change", updateOpacity)
        // const unsubscribeY = y.on("change", updateOpacity)

        return () => {
          // unsubscribeX()
          unsubscribeY()
        }
        // return scrollYProgress.onChange(() => {
        //   setRevealFactor(scrollYProgress.current - 0.5)
        //   console.log(scrollYProgress.current - 0.5, ' is something')
        // })
    }, [scrollYProgress])
    return(
        <div className='w-full sticky top-[0vw] h-[110vh] flex justify-center items-center' style={{
                // zIndex: `${(revealFactor > 0.2760) ? 22 : 19}`,
                // filter: `blur(${(((revealFactor - 0.34)<0)?((revealFactor-0.31)*(-100)):0)}rem)`,
            }}>
            <div className='w-full flex justify-center items-center px-[6vmax]' >
                <div className='absolute w-full z-0'>
                    <img src={Sace_background1} className='w-full' alt='sace background'/>
                </div>
                <div className='w-[45%] h-full pl-0 flex flex-col justify-center items-center'>
                    <motion.div className='absolute w-[20%] flex justify-center items-center -mt-[6vmax] z-10' style={{
                        translateX:((windowSize > 1024) ? xposition1 : 0),
                        translateY:((windowSize > 1024) ? yposition1 : 0),
                      }}>
                        <img src={Sace_background2} className='w-full' alt='sace background 2'/>
                    </motion.div>
                    <motion.div className='absolute flex w-[20%] justify-end items-start -mt-[19vmax] ml-44 0 z-20'  style={{
                        translateX:((windowSize > 1024) ? xposition2 : 0),
                        translateY:((windowSize > 1024) ? yposition2 : 0),
                      }}>
                        <img src={Sace_background3} className='w-full' alt='sace background 3'/>
                    </motion.div>
                    <motion.div className='absolute w-[20%] flex justify-end items-start mr-[18vw] mt-[7vmax] z-0' style={{
                        translateX:((windowSize > 1024) ? xposition3 : 0),
                        translateY:((windowSize > 1024) ? yposition3 : 0),
                      }}>
                        <img src={Sace_background4} className='w-full' alt='sace background 4'/>
                    </motion.div>
                </div>
                <div className='w-6/12 flex flex-col items-end z-10 -ml-[4vmax] ' >
                    <div className='w-[100%] flex flex-col pl-[10vmax] text-white'>
                        <p className='font-Sgb text-[2.75rem] tracking-wide'>S.A.C.E</p>
                        <p className='text-sm font-CoS tracking-tight pr-[3vmax] pt-2'>An augmented reality application that enhances your experience of a destination using cumulative extended user experiences.</p>
                        <p className='text-base font-PoB tracking-tight pr-[16vmax] pt-10 tracking-tighter'>My Role</p>
                        <p className='text-sm font-PoR tracking-tight pr-[12vmax] pt-0'>Team Lead | Unity Developer</p>
                    </div>
                    <div className='flex w-full pt-14 justify-end pr-[1rem] flex-wrap'>
                        <div className='font-PoM flex z-20 bg-white min-w-fit text-[#23232D] text-sm px-4 mr-5 py-1.5 my-1 rounded-xl items-center justify-center'>
                            Augmented Reality
                        </div>
                        <div className='font-PoM flex z-20 bg-white min-w-fit text-[#23232D] text-sm px-6 mr-5 py-1.5 my-1 rounded-xl items-center justify-center '>
                            Exploration
                        </div>
                        <div className='font-PoM flex z-20 bg-[#253938] min-w-fit text-white text-sm px-7 py-1.5 my-1 rounded-xl items-center justify-center'>
                            ARKit
                        </div>
                    </div>
                    <div className='flex w-full py-1 justify-end pr-[1rem] flex-wrap'>
                        <div className='font-PoM flex z-20 my-1 bg-white min-w-fit text-[#23232D] text-sm px-5 mr-5 py-1.5 rounded-xl items-center justify-center'>
                            Sharing Experiences
                        </div>
                        <div className='font-PoM flex z-20 my-1 bg-[#253938] min-w-fit text-white text-sm px-5 mr-5 py-1.5 rounded-xl items-center justify-center'>
                            Illustrator
                        </div>
                        <div className='font-PoM flex z-20 my-1 bg-[#253938] min-w-fit text-white text-sm px-5 mr-5 py-1.5 rounded-xl items-center justify-center'>
                            Figma
                        </div>
                        <div className='font-PoM flex z-20 my-1 bg-[#253938] min-w-fit text-white text-sm px-7 py-1.5 rounded-xl items-center justify-center'>
                            Unity
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}