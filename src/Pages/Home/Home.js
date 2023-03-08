import Navbar from "../../Components/Navbar";
import AnimationBlob from "../../Components/AnimationBlob";
import SocialMediaNavbar from "../../Components/SocialMediaNavbar";
import MusicAndScrollControlBar from "../../Components/MusicAndScrollControlBar";
import Memboro from "../Memboro/Memboro";
import MagnidVR from "../MagnidVR/MagnidVR";
import Rozgaar from "../Rozgaar/Rozgaar";
import Sace from "../Sace/Sace";
import WhoAmI from "../WhoAmI/WhoAmI";
import {useMotionValue} from "framer-motion";
import hribhav_name from "../../Assets/hribhav_name.png";
import hribhav_funky_photo from "../../Assets/hribhav_funky_photo.png";
import Pic from "../../Components/Pic";
import {useContext, useEffect, useState} from "react";

export default function Home(){
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    // const [windowSize, setWindowSize] = useState(0);
    // useEffect(() => {
    //     setWindowSize(window.innerWidth);
    // }, []);
    const handleMouse=(e)=>{
        x.set(e.pageX);
        y.set(e.pageY);
        // console.log(x,y, "x main page,y main page")
    }

    // function handleMouseMove(e) {
    //
    // }

    const [playing, setPlaying] = useState(true);
    useEffect(() => {
        setPlaying(true);
        // console.log('playing', playing);
    }, [playing]);
    return (
        <div>
            <Pic />
            <div id='main-body' className='w-full bg-[#15151A] z-10 overflow-x-clip' onMouseMove={(e)=>handleMouse(e)}>
                <div className='relative w-full flex flex-col'>
                    <Navbar name={hribhav_name} width={"w-14"} paddingTop={'3rem'} />
                    <SocialMediaNavbar id='unclicked' imageDisplay='block' display='block' image={hribhav_funky_photo}
                        style={{
                            display: 'block',
                            width: '30.333%',
                            cursor: 'pointer',
                        }}
                    />
                    <div className='absolute right-[7vw]'>
                        <MusicAndScrollControlBar playing={playing} />
                    </div>
                    <AnimationBlob />
                    <div className='relative w-full h-full'>
                        <Memboro x={x} y={y} />
                        <MagnidVR x={x} y={y} />
                        <Rozgaar x={x} y={y} />
                        <Sace x={x} y={y}/>
                        <WhoAmI />
                    </div>
                </div>
            </div>
        </div>
    )

}
