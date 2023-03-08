import animationBlob from "../../Assets/blob-bg.png";
import AboutMe from "../AboutMe";


export default function AnimationBlob(){

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-9/12 -mt-[5vh] flex flex justify-center items-center'>
                <div className="relative w-full">
                    <img src={animationBlob} className='w-full z-0 ml-[3%]' alt='Animation Blob'/>
                    <iframe className='w-[33%] left-[26vw] absolute bottom-[10%] z-20'
                            src='https://my.spline.design/untitledcopy-892aec6ddd4c393192eadbcb7c2ca04e/'
                             width='100%' height='100%'></iframe>
                    <div className='w-full right-0 absolute bottom-[12%] h-[3.5vmax] bg-[#15151A] z-30'></div>
                </div>
            </div>
            <p className='font-Ga text-[2.65rem] flex justify-center items-center text-white w-7/12 pt-20 pb-80'>
                <AboutMe />
                {/*UX designer with a vision to design sustainable solutions for the future*/}
            </p>
        </div>
    )
}