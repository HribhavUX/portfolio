import memboro_background from '../../Assets/memboro_background.png'
import memboro_background_layer1 from '../../Assets/memboro_background_layer1.png'
import memboro_background_layer2 from '../../Assets/memboro_background_layer2.png'
import {useTransform, motion, useScroll} from 'framer-motion'
import {useEffect, useState} from "react";
import SocialMediaNavbar from "../../Components/SocialMediaNavbar";
import hribhav_funky_photo from "../../Assets/hribhav_funky_photo.png";
export default function Memboro(props) {
    const xposition1 = useTransform(props.x,[0,2000],[-10,10]);
    const xposition2 = useTransform(props.x,[0,2000],[-20,50]);

    const yposition1 = useTransform(props.y,[0,2000],[-10,10]);
    const yposition2 = useTransform(props.y,[0,2000],[-20,10]);
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
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, []);
    return (
        <motion.div className='w-full sticky top-0 h-[110vh] bg-white flex justify-center items-center' style={{
            // filter: `blur(${(revealFactor+0.19 > 0) ? (revealFactor+0.1)*6 : 0}rem)`,
            // zIndex: `${(revealFactor > -0.058342) ? 19 : 20}`,
        }}
        >
            <div className='absolute w-full z-0'>
                <img src={memboro_background} className='w-full' alt='memboro_background'/>
            </div>
            <div className='w-[45%] pl-12 flex flex-col justify-center items-center'
                onClick={() => {
                    console.log('clicked')
                }
                }
            >
                <motion.div style={{
                    translateX:((windowSize > 1024) ? xposition1 : 0),
                    translateY:((windowSize > 1024) ? yposition1 : 0),
                  }} className='absolute flex justify-center items-center mt-16'>
                    <img src={memboro_background_layer1} className='w-[61%]' alt='memboro_background_layer1'/>
                </motion.div>
                <motion.div style={{
                    translateX:((windowSize > 1024) ? xposition2 : 0),
                    translateY:((windowSize > 1024) ? yposition2 : 0),
                  }} className='absolute mr-[3.4rem] mt-4  flex flex-col justify-center items-center z-20'>
                    <img src={memboro_background_layer2} className='w-[52%]' alt='memboro_background_layer2'/>
                </motion.div>
            </div>
            <div className='w-6/12 flex flex-col items-end z-10 -ml-[9.5vmax] ' >
                <div className='w-[100%] flex flex-col pl-[12vmax]'>
                    <p className='font-CoB text-[2.75rem] tracking-wide'>Memboro</p>
                    <p className='text-sm font-CoS tracking-tight pr-28 pt-2'>Memboro is a platform that allows Indian creators to receive financial support from their fanbase. Memboro is a platform for creators who want to earn a sustainable income from their work and for fans to show their who want to support and help creators continue to create.</p>
                    <p className='text-base font-PoB tracking-tight pr-56 pt-10 tracking-tighter'>My Role</p>
                    <p className='text-sm font-PoR tracking-tight pr-56 pt-0'>Team Lead | T - UX Designer</p>
                </div>
                <div className='flex w-full pt-10 justify-end pr-[1rem] flex-wrap'>
                    <div className='font-PoM flex z-20 bg-white min-w-fit text-[#01BEE7] text-sm px-4 mr-5 py-1 my-1 border-[0.1rem] rounded-xl items-center justify-center border-[#01BEE7]'>
                        Creator Economy
                    </div>
                    <div className='font-PoM flex z-20 bg-white min-w-fit text-[#01BEE7] text-sm px-6 mr-5 py-1 my-1 border-[0.1rem] rounded-xl items-center justify-center border-[#01BEE7]'>
                        Startup
                    </div>
                    <div className='font-PoM flex z-20 bg-[#01BEE7] min-w-fit text-white text-sm px-7 py-1 my-1 border-[0.1rem] rounded-xl items-center justify-center border-[#01BEE7]'>
                        Miro
                    </div>
                </div>
                <div className='flex w-full py-1 justify-end pr-[1rem] flex-wrap'>
                    <div className='font-PoM flex z-20 my-1 bg-white min-w-fit text-[#01BEE7] text-sm px-5 mr-5 py-1 border-[0.1rem] rounded-xl items-center justify-center border-[#01BEE7]'>
                        E-Commerce
                    </div>
                    <div className='font-PoM flex z-20 my-1 bg-[#01BEE7] min-w-fit text-white text-sm px-5 mr-5 py-1 border-[0.1rem] rounded-xl items-center justify-center border-[#01BEE7]'>
                        Illustrator
                    </div>
                    <div className='font-PoM flex z-20 my-1 bg-[#01BEE7] min-w-fit text-white text-sm px-5 mr-5 py-1 border-[0.1rem] rounded-xl items-center justify-center border-[#01BEE7]'>
                        Figma
                    </div>
                    <div className='font-PoM flex z-20 my-1 bg-[#01BEE7] min-w-fit text-white text-sm px-7 py-1 border-[0.1rem] rounded-xl items-center justify-center border-[#01BEE7]'>
                        Google Stats
                    </div>
                </div>
            </div>
        </motion.div>
    )
}