import Navbar from "../../Components/Navbar";
import SocialMediaNavbar from "../../Components/SocialMediaNavbar";
import MusicAndScrollControlBar from "../../Components/MusicAndScrollControlBar";
import WelcomeText from "../../Assets/WelcomeText.svg";
import Pic from "../../Components/Pic";
import PicImage from "../../Assets/Pic.png";
import AboutName from "../../Assets/AboutName.png";
import hribhav_funky_photo from "../../Assets/hribhav_funky_photo.png";
import {useEffect, useState} from "react";

export default function About() {
  const [playing, setPlaying] = useState(true);
    useEffect(() => {
        setPlaying(true);
        // console.log('playing', playing);
    }, [playing]);
  return (
    <div className="w-full">
      <Pic />
      <div className="w-full z-20 overflow-x-clip">
        <div className=" w-full flex flex-col items-center bg-[#23232D] pb-20">
          <Navbar name={AboutName} width={"w-28"} paddingTop={"1.5rem"} />
          <SocialMediaNavbar
            id="unclicked"
            imageDisplay="block"
            display="block"
            image={hribhav_funky_photo}
            style={{
              display: "block",
              width: "31%",
              cursor: "pointer",
            }}
          />
          <MusicAndScrollControlBar playing={playing} />
          <div className="flex w-full h-full justify-center pt-28 pl-56">
            <div className="w-[70%] text-white font-normal text-left flex flex-col flex-wrap ">
              <div className="flex w-7/12">
                <p className='text-[5rem] tracking-tight mb-0 font-Ava font-bold'>WELCOME</p>
              </div>
              <p className="font-PoR text-[#B0B0C2] font-light text-base text-left flex flex-wrap w-[65%] mt-10">
                My journey began as a Computer Science undergraduate. However, I soon discovered a deeper interest in understanding the “Why”  behind the code I was writing. This curiosity led me to explore the field of UX design and its intricacies. Through a series of side projects and freelance work, I developed a love for the art of problem-solving and the challenge of creating impactful solutions.
                <br /> <br /> I am a versatile product designer - something like a full-stack product designer. I thrive on leading projects from the research and design stages to the prototyping phase, ensuring seamless collaboration with developers and delivering exceptional end-results. My approach involves a deep understanding of user needs, a passion for finding creative solutions, and a commitment to delivering top-quality work.
                <br /> <br />As a passionate professional, my goal is to infuse the agile spirit of a startup into a well-established enterprise system. I strive to collaborate with visionary technology leaders to bring about meaningful change and embrace cutting-edge ideas. By fostering an environment of collaboration, continuous learning, and user-centered design, I aim to drive positive transformation and bring agility to the enterprise

              </p>
            </div>

            <span className="w-[50%] mt-32 mr-20 pr-20">
              <img src={PicImage} alt="AboutMePicture" className="w-full" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
