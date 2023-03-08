import excl1 from "../../Assets/Rozgaar/excl1.png";
import excl2 from "../../Assets/Rozgaar/excl2.png";
import how from "../../Assets/MagnidVR/how.png";

export default function Section1() {
  return (
    <div className="font-PoR">
      <div className="w-full px-36 flex justify-between font-Por">
        <div className="w-1/2 font-Por my-12">
          <div>
            <h2 className="font-Sgs text-xl my-2">Challenge</h2>
            <p>Deisgning for users with minimal lireacy rate, working in an unorganized sector</p>
          </div>
          <div>
            <h2 className="font-Sgs text-xl mt-8">Stakeholders</h2>
            <p>Blue collar job seekers with minimal literacy rate</p>
          </div>
        </div>
        <div className="w-1/2 font-Por my-12">
          <div>
            <h2 className="font-Sgs text-xl my-2">My Role</h2>
            <div className="flex flex-wrap gap-2">
              <div className="mx-2 font-Por px-4 py-2 bg-[#E93242] rounded-[10px] text-white">UX Research</div>
              <div className="mx-2 font-Por px-4 py-2 bg-[#E93242] rounded-[10px] text-white">UI Design</div>
              <div className="mx-2 font-Por px-4 py-2 bg-[#E93242] rounded-[10px] text-white">User Review</div>
              <div className="mx-2 font-Por px-4 py-2 bg-[#E93242] rounded-[10px] text-white">Content Design + Strategy</div>
            </div>
          </div>
          <div>
            <h2 className="font-Sgs text-xl mt-8">What did I build?</h2>
            <p>Case Study |  Help Standalone Restaurants seek and manage Human Resources</p>
          </div>
        </div>
      </div>
      <div className="px-36 my-24">
        <h2 className="font-Sgs text-xl text-center">Context</h2>
        <p className="text-center w-2/3 mx-auto my-2">A project came to me to design a restaurant management suit with job hiring as our first phase. At face value, it was rather a simple project as we had competitors like LinkedIn, freelancer, and Upwork with a similar template. But after diving deep, things got interesting.</p>
        <p className="text-center w-2/3 mx-auto my-2">There are several hiring portals for white collar jobs searches. But there is little to no service in the hiring sector for the blue collar jobs such as house help, sous chef, waiter etc, in Indian context. and this problem gets even bigger in the hospitality sector where the labour is unorganized and filled with uncertainity for job seekers as well as the hiring company.</p>
      </div>
      <div className="relative px-36 my-24 min-h-[75vh]">
        <img className="absolute left-[0%] top-[-15%] -z-10" src={excl1} alt="decorative" />
        <img className="absolute right-[25%] bottom-[0%] -z-10" src={excl2} alt="decorative" />
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
      <div className="flex my-36 justify-evenly items-center">
        <div>
          <p className="text-lg">We have our challenges and assumptions.</p>
          <h3 className="text-xl font-bold">Lets dive in!</h3>
        </div>
        <img className="h-[50vh]" src={how} alt="decorative"/>
      </div>
    </div>
  )
}
