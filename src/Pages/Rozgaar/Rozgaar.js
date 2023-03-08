import rozgaar_background from '../../Assets/rozgaar_background.png'
import rozgaar_phone_ui from '../../Assets/rozgaar_phone_ui.png'
import {useEffect, useState} from "react";
import {useTransform, motion, useScroll} from 'framer-motion';

export default function Rozgaar(props) {
    const xposition1 = useTransform(props.x,[0,5000],[-40,100]);
    const yposition1 = useTransform(props.y,[0,5000],[-100,20]);
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
    return (
        <div className='w-full sticky top-[1vw] h-[110vh] flex justify-center items-center' style={{
            // zIndex: `${(revealFactor > 0.101532) ? 21 : 19}`,
            // filter: `blur(${(((revealFactor - 0.115)<0)?((revealFactor-0.115)*(-200)):((revealFactor-0.145>0)?((revealFactor-0.145)*50):0))}rem)`,

        }}>
            <div className='absolute w-full z-0'>
                <img src={rozgaar_background} className='w-full' alt='memboro_background'/>
            </div>
            <div className='w-[80%] flex justify-center -mr-[5vmax]'>
                <div className='w-6/12 flex flex-col justify-center z-30 -mr-[9vmax]'>
                    <div className='w-full'>
                        <p className='text-white w-full font-KaB text-[2.65rem]'>
                            Rozgaar
                        </p>
                        <p className='text-white w-8/12 font-Sgr text-sm pt-0'>
                            An augmented reality application that enhances your experience of a destination using cumulative extended user experiences                         </p>
                        <p className='text-white w-1/2 font-PoB text-base pt-10 pb-1.5'>
                            My Role
                        </p>
                        <p className='text-sm text-white w-1/2 font-PoR'>
                            UX Designer | Unity Developer
                        </p>
                        <div className='flex w-10/12 pt-10 justify-start flex-wrap'>
                            <div className='font-PoM flex z-20 bg-white min-w-fit text-[#EB1934] text-sm px-5 mr-3 py-1 my-1 rounded-lg items-center justify-center'>
                                NLP & DIP
                            </div>
                            <div className='font-PoM flex z-20 bg-white min-w-fit text-[#EB1934] text-sm px-6 mr-3 py-1 my-1  rounded-lg items-center justify-center'>
                                Startup
                            </div>
                            <div className='font-PoM flex z-20 bg-black min-w-fit text-white text-sm px-7 py-1 my-1 rounded-lg items-center justify-center'>
                                Miro
                            </div>
                        </div>
                        <div className='flex w-full py-1 justify-start flex-wrap'>
                            <div className='font-PoM flex z-20 my-1 bg-white min-w-fit text-[#EB1934] text-sm px-5 mr-3 py-1 rounded-lg items-center justify-center'>
                                Blue Collar Jobs
                            </div>
                            <div className='font-PoM flex z-20 my-1 bg-black min-w-fit text-white text-sm px-5 mr-3 py-1 rounded-lg items-center justify-center'>
                                Notion
                            </div>
                            <div className='font-PoM flex z-20 my-1 bg-black min-w-fit text-white text-sm px-5 mr-3 py-1 rounded-lg items-center justify-center'>
                                Figma
                            </div>
                            <div className='font-PoM flex z-20 my-1 bg-black min-w-fit text-white text-sm px-5 py-1 rounded-lg items-center justify-center'>
                                Travel
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div className='w-6/12 z-20 flex items-center' style={{
                    translateX:((windowSize > 1024) ? xposition1 : 0),
                    translateY:((windowSize > 1024) ? yposition1 : 0),
                  }}>
                    <img src={rozgaar_phone_ui} alt='Rozgaar Phone UI' className='w-full' />
                </motion.div>
            </div>
        </div>
    )
}