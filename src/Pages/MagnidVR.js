import Section1 from "../Components/MagnidVR/Section1";
import Section2 from "../Components/MagnidVR/Section2";
import hero from "../Assets/MagnidVR/hero.png";
import bg from "../Assets/MagnidVR/bg.png";

export default function MagnidVR() {
  return(
    <>
      <div className="font-PoR px-36 min-h-screen flex justify-between items-center text-white">
        <img className="absolute top-0 left-0 right-0 -z-10" src={bg} alt="background"/>
        <div className="flex flex-col justify-around self-stretch">
          <div>
            <h1 className="my-2 font-PoB text-5xl italic">Magnid VR</h1>
            <p className="my-4 max-w-xs">A seamless VR experience for virtual events in metaverse</p>
          </div>
          <div>
            <div className="flex my-2">
              <div className="mx-2 px-4 py-2 bg-[#6900BB] rounded-[10px] text-white shadow-md">Metaverse</div>
              <div className="mx-2 px-4 py-2 bg-[#6900BB] rounded-[10px] text-white shadow-md">Virtual Reality</div>
              <div className="mx-2 px-4 py-2 bg-[#6900BB] rounded-[10px] text-white shadow-md">Exploration</div>
            </div>
            <div className="flex my-2">
              <div className="mx-2 px-4 py-2 bg-[#E7018B] rounded-[10px] text-white shadow-md">Illustrator</div>
              <div className="mx-2 px-4 py-2 bg-[#E7018B] rounded-[10px] text-white shadow-md">Figma</div>
              <div className="mx-2 px-4 py-2 bg-[#E7018B] rounded-[10px] text-white shadow-md">Unity</div>
              <div className="mx-2 px-4 py-2 bg-[#E7018B] rounded-[10px] text-white shadow-md">Miro</div>
            </div>
          </div>
        </div>
        <img className="w-1/2" src={hero} alt="hero"/>
      </div>
      <Section1 />
      <Section2 />
     </>
  )
}
