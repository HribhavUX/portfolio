import profile_circle from '../../Assets/profile_circle.png'
import {useEffect, useState} from "react";
import styles from './who.module.css';
import {useScroll} from "framer-motion";
import anshul from '../../Assets/anshul.png';
import pragya from '../../Assets/pragya.png';
import priyansh from '../../Assets/priyansh.png';
import naman_patel from '../../Assets/naman_patel.png';
import goBikes from '../../Assets/goBikes.png';
import pstar from '../../Assets/pstar.png';
import iiitd from '../../Assets/iiitd.png';
import digital_product_school from '../../Assets/digital_product_school.png';
import skyedge from '../../Assets/skyedge.png';
import memboro from '../../Assets/memboro.png';
import boom from '../../Assets/boom.png';
import rozgaar from '../../Assets/rozgaar.png';
import atom_dao from '../../Assets/atom_dao.png';
export default function WhoAmI() {
    useEffect(() => {
        function isInViewport(item) {

            const bounding = item.getBoundingClientRect(),
                myElementHeight = item.offsetHeight,
                myElementWidth = item.offsetWidth;

            if(bounding.top >= -1*myElementHeight
                && bounding.left >= -1*myElementWidth
                && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
                && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
                return true;

            } else {
                return false;
            }

        }
        const scrollele1 = document.querySelector(`#who_am_i`);
        document.addEventListener("scroll", function(){
			if(isInViewport(scrollele1)) {
				document.querySelector(`#box1`).classList.add(styles.fadeInTop);
				document.querySelector(`#box2`).classList.add(styles.fadeInDown);
				document.querySelector(`#box3`).classList.add(styles.fadeInTop);
				document.querySelector(`#box4`).classList.add(styles.fadeInDown);
				document.querySelector(`#box5`).classList.add(styles.fadeInTop);
				document.querySelector(`#box6`).classList.add(styles.fadeInDown);

			}else{
				document.querySelector(`#box1`).classList.remove(styles.fadeInTop);
				document.querySelector(`#box2`).classList.remove(styles.fadeInDown);
				document.querySelector(`#box3`).classList.remove(styles.fadeInTop);
				document.querySelector(`#box4`).classList.remove(styles.fadeInDown);
				document.querySelector(`#box5`).classList.remove(styles.fadeInTop);
				document.querySelector(`#box6`).classList.remove(styles.fadeInDown);
            }
        });
    } , []);
    const { scrollYProgress } = useScroll()
    const [revealFactor, setRevealFactor] = useState(0)

    useEffect(() => {
        function updateOpacity() {
            setRevealFactor(scrollYProgress.current - 0.5)
            console.log(scrollYProgress.current - 0.5, ' is something6')
        }
        const unsubscribeY = scrollYProgress.on("change", updateOpacity)
        return () => {
          unsubscribeY()
        }
    }, [scrollYProgress])
    return (
        <div className='flex w-full sticky justify-center bg-[#15151A] pt-[9vh] pb-[5vh] z-20' style={{
                // zIndex: `${(revealFactor >= 0.5) ? 23 : 22}`,
            }}>
            <div id='who_am_i' className='flex w-[67%] flex-col items-center'>
                <p className='mb-0 font-PoB text-white text-[3rem]'>
                    Who am I?
                </p>
                <div className='flex w-full justify-evenly pt-10'>
                    <div id='box' className='p-3 py-7 shadow-2xl w-[23.5%] rounded-xl mr-5 mb-5 bg-[#23232D] flex flex-col'>
                        <div className='w-full flex justify-between pb-3'>
                            <div className='w-3/12'>
                                <img src={anshul} alt='profile_circle' className='w-full' />
                            </div>
                            <div className='w-[70%] flex flex-col justify-center'>
                                <p className='font-PoB text-white text-[0.6rem]'>
                                    Anshul Yadav
                                </p>
                                <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                    Founder - Atom Dao
                                </p>
                            </div>
                        </div>
                        <div className='font-PoM text-white text-[0.75rem]'>
                            “Hribhav's creative vision is very good. He is really fast at making the prototype of the website or application”
                        </div>
                    </div>
                    <div id='box' className='p-3 py-7 shadow-2xl rounded-xl w-[23.5%] mr-5 mb-5 bg-[#23232D] flex flex-col'>
                        <div className='w-full flex justify-between pb-3'>
                            <div className='w-3/12'>
                                <img src={pragya} alt='profile_circle' className='w-full' />
                            </div>
                            <div className='w-[70%] flex flex-col justify-center'>
                                <p className='font-PoB text-white text-[0.6rem]'>
                                    Pragya Sikka
                                </p>
                                <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                    Founder - Memboro
                                </p>
                            </div>
                        </div>
                        <div className='text-[0.75rem] font-PoM text-white text-[0.75rem]'>
                            “The best thing about working with Hribhav is he walks you through the process, which I feel lacks with a lot of other designers. I have seen him grow from a curious team contributor to an incredible team lead”
                        </div>
                    </div>
                    <div id='box' className='p-3 py-7 shadow-2xl rounded-xl w-[23.5%] mr-5 mb-5 bg-[#23232D] flex flex-col'>
                        <div className='w-full flex justify-between pb-3'>
                            <div className='w-3/12'>
                                <img src={priyansh} alt='profile_circle' className='w-full' />
                            </div>
                            <div className='w-[70%] flex flex-col justify-center'>
                                <p className='font-PoB text-white text-[0.6rem]'>
                                    Priyansh Agrawal
                                </p>
                                <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                    Founder - TLE | AIR 1 in Google Kick Start
                                </p>
                            </div>
                        </div>
                        <div className='text-[0.75rem] font-PoM text-white text-[0.75rem]'>
                            “Hribhav has a keen eye for detail and a deep understanding of design principles, which resulted in visually stunning designs that effectively communicated our message and resonated with our audience.”
                        </div>
                    </div>
                    <div id='box' className='p-3 py-7 shadow-2xl rounded-xl w-[23.5%] mr-5 mb-5 bg-[#23232D] flex flex-col'>
                        <div className='w-full flex justify-between pb-3'>
                            <div className='w-3/12'>
                                <img src={naman_patel} alt='profile_circle' className='w-full' />
                            </div>
                            <div className='w-[70%] flex flex-col justify-center'>
                                <p className='font-PoB text-white text-[0.6rem]'>
                                    Naman Patel
                                </p>
                                <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                    Founder - Restolution
                                </p>
                            </div>
                        </div>
                        <div className='text-[0.75rem] font-PoM text-white text-[0.75rem]'>
                            “The project delivery was on-point. Punctual, Processional and highly objective driven designing skills. Great work by Hribhav! Cheers!”
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap w-[90%] items-center justify-evenly'>
                    <div className='w-[20%]'>
                        <img src={goBikes} alt='goBikes' className='w-full' />
                    </div>
                    <div className='w-[12%]' >
                        <img src={pstar} alt='pstar' className='w-full'/>
                    </div>
                    <div className='w-[15%]'>
                        <img src={iiitd} alt='IIITD'  />
                    </div>
                    <div className='w-[27%]'>
                        <img src={digital_product_school} alt='Digital Product School'/>
                    </div>
                    <div className='w-[20%]'>
                        <img src={skyedge} alt='SkyEdge'/>
                    </div>
                    <div className='w-[32%] pr-[2vw]'>
                        <img src={memboro} alt='Memboro'  />
                    </div>
                    <div className='w-[20%] pr-[2vw]'>
                        <img src={boom} alt='Boom'/>
                    </div>
                    <div className='w-[30%]'>
                        <img src={rozgaar} alt='Rozgaar'/>
                    </div>
                    <div className='w-[17%]'>
                        <img src={atom_dao} alt='Atom Dao'/>
                    </div>
                </div>
            </div>
        </div>
    )
}