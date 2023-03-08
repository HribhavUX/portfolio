import MagnidVR_background1 from "../../Assets/MagnidVR_background1.png";
import MagnidVR_background2 from "../../Assets/MagnidVR_background2.png";
import MagnidVR_background3 from "../../Assets/MagnidVR_background3.png";
import MagnidVR_background4 from "../../Assets/MagnidVR_background4.png";
import {useEffect, useState} from "react";
import {useTransform, motion, useScroll} from 'framer-motion';
export default function MagnidVR(props) {
    const xposition1 = useTransform(props.x,[0,2000],[0,40]);
    const xposition2 = useTransform(props.x,[0,2000],[0,60]);
    const xposition3 = useTransform(props.x,[0,2000],[0,80]);

    const yposition1 = useTransform(props.y,[0,3000],[0,10]);
    const yposition2 = useTransform(props.y,[0,3000],[-100,20]);
    const yposition3 = useTransform(props.y,[0,3000],[-10,60]);
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, []);
    const { scrollYProgress } = useScroll()
    const [revealFactor, setRevealFactor] = useState(0)

    useEffect(() => {
        function updateOpacity() {
            setRevealFactor(scrollYProgress.current - 0.5)
            console.log(scrollYProgress.current - 0.5, ' is something')
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
        <div className='w-full sticky top-0 flex justify-center items-center h-[110vh] px-0'
            style={{
                // zIndex: "20",
                // zIndex: `${(revealFactor > -0.058342) ? 20 : 19}`,
                // multiply revealFactor by -1 and then add filter
                // filter: `blur(${(revealFactor+0.04<0)?((revealFactor+0.04)*(-50)):((revealFactor+0.006>0)?((revealFactor+0.006)*25):0)}rem)`,
            }}
        >
            <div className='absolute w-full z-0'>
                <img src={MagnidVR_background1} className='w-full' alt='magnidVR'/>
            </div>
            <div className='w-6/12 pl-[13vmax] flex flex-col justify-center z-30'>
                <div className='w-full'>
                    <p className='text-white w-full font-Sgb text-[2.65rem]'>
                        Magnid VR
                    </p>
                    <p className='text-white w-full font-Sgr text-sm'>
                        Helps organizations plan and host events using VR technology to enhance the event experience for attendees and make it more interactive, engaging, and immersive.
                    </p>
                    <p className='text-white w-1/2 font-PoB text-base pt-10 pb-1.5'>
                        My Role
                    </p>
                    <p className='text-sm text-white w-1/2 font-PoR'>
                        UX Designer | Unity Developer
                    </p>
                    <div className='flex w-full pt-14 justify-start pr-[0rem] flex-wrap'>
                        <div className='font-PoM flex z-20 bg-[#6900BB] min-w-fit text-white text-sm px-4 mr-5 py-1 my-1 rounded-xl items-center justify-center'>
                            Virtual Reality
                        </div>
                        <div className='font-PoM flex z-20 bg-[#6900BB] min-w-fit text-white text-sm px-6 mr-5 py-1 my-1  rounded-xl items-center justify-center'>
                            Metaverse
                        </div>
                        <div className='font-PoM flex z-20 bg-[#E7018B] min-w-fit text-white text-sm px-7 py-1 my-1 rounded-xl items-center justify-center'>
                            Miro
                        </div>
                    </div>
                    <div className='flex w-full py-1 justify-start flex-wrap'>
                        <div className='font-PoM flex z-20 my-1 bg-[#6900BB] min-w-fit text-white text-sm px-5 mr-5 py-1 rounded-xl items-center justify-center'>
                            Event Curation
                        </div>
                        <div className='font-PoM flex z-20 my-1 bg-[#E7018B] min-w-fit text-white text-sm px-5 mr-5 py-1 rounded-xl items-center justify-center'>
                            Oculus
                        </div>
                        <div className='font-PoM flex z-20 my-1 bg-[#E7018B] min-w-fit text-white text-sm px-5 mr-5 py-1 rounded-xl items-center justify-center'>
                            Figma
                        </div>
                        <div className='font-PoM flex z-20 my-1 bg-[#E7018B] min-w-fit text-white text-sm px-7 py-1 rounded-xl items-center justify-center'>
                            Unity
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[40%] pl-0 flex flex-col justify-center items-center'>
                <motion.div className='absolute w-[26%] -mt-[1vmax] flex justify-center items-center z-10' style={{
                    translateX:((windowSize > 1024) ? xposition1 : 0),
                    translateY:((windowSize > 1024) ? yposition1 : 0),
                  }}>
                    <img src={MagnidVR_background2} className='w-[100%]' alt='magnid background 2'/>
                </motion.div>
                <motion.div className='absolute mr-[20vw] w-[20%] -mt-[22vmax] flex justify-center items-center z-0' style={{
                    translateX:((windowSize > 1024) ? xposition2 : 0),
                    translateY:((windowSize > 1024) ? yposition2 : 0),
                  }}>
                    <img src={MagnidVR_background3} className='w-[100%]' alt='magnid background 3'/>
                </motion.div>
                <motion.div className='absolute ml-[12.5vw] w-[16%] mt-[0vmax]  flex flex-col justify-center items-center z-10' style={{
                    translateX:((windowSize > 1024) ? xposition3 : 0),
                    translateY:((windowSize > 1024) ? yposition3 : 0),
                  }}>
                    <img src={MagnidVR_background4} className='w-[100%]' alt='magnid background 4'/>
                </motion.div>
            </div>
        </div>
    )
}