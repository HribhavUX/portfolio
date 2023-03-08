import Section1 from "../Components/Rozgaar/Section1";
import Section2 from "../Components/Rozgaar/Section2";
import hero from "../Assets/Rozgaar/hero.png";

export default function Rozgaar() {
  return (
    <>
      <div className="font-PoR px-36 min-h-screen flex justify-between items-center">
        <div className="flex flex-col justify-around self-stretch">
          <div>
            <h1 className="my-2 font-PoB text-5xl italic">Rozgaar</h1>
            <p className="my-4 max-w-xs">Help Standalone Restaurants seek and manage Human Resources</p>
          </div>
          <div>
            <div className="flex my-2">
              <div className="mx-2 px-4 py-2 bg-[#E93242] rounded-[10px] text-white shadow-md">Figma</div>
              <div className="mx-2 px-4 py-2 bg-[#E93242] rounded-[10px] text-white shadow-md">Illustrator</div>
              <div className="mx-2 px-4 py-2 bg-[#E93242] rounded-[10px] text-white shadow-md">Miro</div>
            </div>
            <div className="flex my-2">
              <div className="mx-2 px-4 py-2 bg-white rounded-[10px] shadow-md">Hiring</div>
              <div className="mx-2 px-4 py-2 bg-white rounded-[10px] shadow-md">Blue Collar</div>
              <div className="mx-2 px-4 py-2 bg-white rounded-[10px] shadow-md">AI + ML</div>
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
