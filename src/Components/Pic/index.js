import HribhavPic from '../../Assets/Pic2.png'
import SocialMediaNavbar from "../SocialMediaNavbar";
import openPicLogo from '../../Assets/openPicLogo.png';
import {useEffect} from "react";
import styles from '../../Pages/WhoAmI/who.module.css';
export default function Pic(){
    useEffect(() => {
        const btn1 = document.querySelector('#unclicked');
        const btn2 = document.querySelector('#clicked');
        const banner = document.querySelector("#pic-container");
        btn1.addEventListener("click", () => {
            // add a transition to the banner and the main body to make it look smooth

            banner.style.display = "flex";
            banner.style.zIndex = "100";
            // banner.style.transition = "all 3s ease-in-out";
            banner.classList.remove(styles.fadeOut)
            banner.classList.add(styles.fadeIn)
            // mainBody.style.filter = "blur(0px)";
        } );
        btn2.addEventListener("click", () => {
            banner.style.display = "none";
            // console.log("clicked");
            banner.classList.remove(styles.fadeIn)
            // banner.classList.add(styles.fadeOut)
            // mainBody.style.filter = "blur(0px)";
        } );

    }, []);
    return (
        <div id='pic-container' className='w-[100%] h-screen fixed hidden justify-center backdrop-blur-md'>
            <SocialMediaNavbar id='clicked' imageDisplay='block' opacity='0' image={openPicLogo} style={{
                marginLeft: '0.75rem',
                display: 'block',
                width: '22%',
                marginTop: '1.5vh',
                cursor: 'pointer',
            }}
            classname = {styles.image}
            />
            <img src={HribhavPic} alt='Pic of Hribhav' className='w-[62%] py-[5vw]'/>
        </div>
    )
}