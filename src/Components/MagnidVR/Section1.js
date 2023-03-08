import exclamation from "../../Assets/MagnidVR/exclamation.png";

export default function Context() {
  return (
    <div>
      <div className="w-full px-36 flex justify-between font-Por">
        <div className="w-1/2 font-Por my-12">
          <div>
            <h2 className="font-Sgs text-xl my-2">Challenge</h2>
            <p>To decrease the churn while using a metaverse VR product.</p>
          </div>
          <div>
            <h2 className="font-Sgs text-xl mt-8">Stakeholders</h2>
            <p>Users or attendees attending a virtual event which has a VR session.</p>
          </div>
        </div>
        <div className="w-1/2 font-Por my-12">
          <div>
            <h2 className="font-Sgs text-xl my-2">My Role</h2>
            <span className="mx-2 font-Por px-4 py-2 bg-[#6900BB] rounded-[10px] text-white">UX Research</span>
            <span className="mx-2 font-Por px-4 py-2 bg-[#6900BB] rounded-[10px] text-white">UI Design</span>
            <span className="mx-2 font-Por px-4 py-2 bg-[#6900BB] rounded-[10px] text-white">Interaction Designer</span>
          </div>
          <div>
            <h2 className="font-Sgs text-xl mt-8">What did I build?</h2>
            <p>A seamless VR experience with guides and tutorials, for virtual events in metaverses.</p>
          </div>
        </div>

      </div>
      <div className="px-36 my-24">
        <h2 className="font-Sgs text-xl text-center">Context</h2>
        <p className="text-center w-2/3 mx-auto my-2">I was among the top 8 UX designers worldwide (and the only one from India) to be accepted at Digital Product School by UnternehmerTUM, Munich, Germany. It was a full time job where the team had to solve a real company’s problem. </p>
        <p className="text-center w-2/3 mx-auto my-2">The company, Magnid, provides immersive virtual event solutions using their unique style and technology. They wanted to pivot to Virtual reality and metaverse, but experienced a huge churn during the transition in their beta testing. </p>
      </div>
      <div className="relative px-36 my-24 min-h-[75vh]">
        <img className="absolute left-[5%] -z-10" src={exclamation} alt="decorative" />
        <img className="absolute right-[25%] bottom-[5%] -z-10" src={exclamation} alt="decorative" />
        <h2 className="font-PoS text-xl text-center mb-8">Challenge Breakdown</h2>
        <div className="w-full flex justify-evenly">
          <div className="w-[25%] flex flex-col rounded-md shadow-md p-8 bg-white">
            <h3 className="font-Sgs text-center mb-4">New users to VR</h3>
            <p>VR is new for general users hence the resistance to use is extremely high. We can leverage the intruiging and sci-fi nature of VR to make users try VR.</p>
          </div>
          <div className="w-[25%] flex flex-col rounded-md shadow-md p-8 bg-white">
            <h3 className="font-Sgs text-center mb-4">Overwhelming VR</h3>
            <p>VR get overwhelming if you are not into it for more than a month. We need to have a warm up zone, much more than a tutorial</p>
          </div>
          <div className="w-[25%] flex flex-col rounded-md shadow-md p-8 bg-white">
            <h3 className="font-Sgs text-center mb-4">Superpowers in VR</h3>
            <p>Metaverse is fun only if we can do something there which is not possible in the real life. But what can be done in a conference? </p>
          </div>
        </div>
      </div>
    </div>
  )
}
