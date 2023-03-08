import music_mute from '../../Assets/music_muteWhite.png';
import music_unmute from '../../Assets/music_unmuteWhite.png';
import scrollWhite from '../../Assets/scrollWhite.png';
import scrollBlack from '../../Assets/scrollBlack.png';
import {useEffect, useState} from "react";
import ReactPlayer from 'react-player';
import music from '../../../src/music.mp3';
import {useScroll} from "framer-motion";
export default function MusicAndScrollControlBar(props) {
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0);
    const { scrollYProgress } = useScroll()
    const [revealFactor, setRevealFactor] = useState(0)

    useEffect(() => {
        function updateOpacity() {
            setRevealFactor(scrollYProgress.current - 0.5)
                console.log(scrollYProgress.current - 0.5, ' is any')
        }
        const unsubscribeY = scrollYProgress.on("change", updateOpacity)
        return () => {
          unsubscribeY()
        }
    }, [scrollYProgress])
     let context;
    // window.onload = function() {
        context = new AudioContext();
        // console.log('context ', context);
    // };
    useEffect(() => {
        console.log('volume is ', volume);
    }, [volume]);

    return (
        <div className='flex h-full right-[7vw] bottom-[15vh] fixed z-40' onClick={
            () => {
                setVolume(
                    (volume === 0) ? 1 : 0
                );
            }
        }>
         <ReactPlayer
                url={'https://soundcloud.com/zainu-kunjur/sanam-re?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'}
                playing={playing}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                volume={volume}
             // loop={true}
                controls={true}
                style={{display: 'none'}}
            />
            <div className='w-full p-0 -mt-8 flex flex-col justify-end items-end text-white font-PoR'>
                <img className='pr-0 mb-2' style={
                    (volume===0)? {width: "1.5rem"}:{width: "2rem"}
                } src={volume===0?music_mute:music_unmute}/>
                <img className='w-[1.5rem] pr-0' src={(revealFactor>=-0.264388233  && revealFactor<=-0.10757535) ? scrollBlack : scrollWhite} alt='scroll'/>
                <p className='font-PoR text-sm rotate-90 m-0 mt-16 -mr-7' style={(revealFactor>=-0.2887185 && revealFactor<=-0.13190568) ? {
                    color: 'black',
                }:{
                    color: 'white',
                }}>Scroll Down</p>
            </div>
        </div>
        // <div className='z-[100]'>
        //     <ReactPlayer
        //         url='../../music.mp3'
        //         playing={playing}
        //         onPlay={() => setPlaying(true)}
        //         onPause={() => setPlaying(false)}
        //         controls
        //         style={{display: 'none'}}
        //     />
        //     <button style={{
        //         color: 'white',
        //     }} onClick={() => setPlaying(!playing)}>
        //         { playing ? 'Pause' : 'Play' }
        //     </button>
        // </div>
    )
}