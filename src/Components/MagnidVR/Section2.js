import imonit from "../../Assets/MagnidVR/imonit.png";
import talkboard from "../../Assets/MagnidVR/talkboard.png";
import useri1 from "../../Assets/MagnidVR/useri1.png";
import useri2 from "../../Assets/MagnidVR/useri2.png";
import thinking from "../../Assets/MagnidVR/thinking.png";
import how from "../../Assets/MagnidVR/how.png";
import howmightwe from "../../Assets/MagnidVR/howmightwe.png";
import comp from "../../Assets/MagnidVR/comp.png";
import compa from "../../Assets/MagnidVR/compa.png";
import collage from "../../Assets/MagnidVR/collage.png";
import confetti from "../../Assets/MagnidVR/confetti.png";
import table from "../../Assets/MagnidVR/table.png";
import hand from "../../Assets/MagnidVR/hand.png";
import signaturemoments from "../../Assets/MagnidVR/signaturemoments.png";
import arrowright from "../../Assets/arrow-right.png";
import arrowdown from "../../Assets/arrow-down.png";
import arrowleft from "../../Assets/arrow-left.png";
import story from "../../Assets/MagnidVR/story.png";
import persona1 from "../../Assets/MagnidVR/persona1.png";
import persona2 from "../../Assets/MagnidVR/persona2.png";

export default function Section2() {
  return (
    <div className="px-36 font-PoR">
      <div className="flex my-36 justify-evenly items-center">
        <div>
          <p className="text-lg">We have our challenges and assumptions.</p>
          <h3 className="text-xl font-bold">Lets dive in!</h3>
        </div>
        <img className="h-[50vh]" src={imonit} alt="decorative"/>
      </div>
      <div className="px-36 my-24">
        <div className="w-full flex justify-between items-center">
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Qualitative & Quantitive Research</span>
          <img className="w-8" src={arrowright} alt="arrowright"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Persona Mapping</span>
          <img className="w-8" src={arrowright} alt="arrowright"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">How Might We</span>
          <img className="w-8" src={arrowright} alt="arrowright"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Competitor Analysis</span>
        </div>
        <div className="my-12 w-full flex justify-between items-center">
          <h2 className="text-2xl font-bold">Design Process</h2>
          <img src={arrowdown} alt="arrowdown"/>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">User Feedback</span>
          <img className="w-8" src={arrowleft} alt="arrowleft"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">High Fidelity Prototype</span>
          <img className="w-8" src={arrowleft} alt="arrowleft"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Storyboarding</span>
          <img className="w-8" src={arrowleft} alt="arrowleft"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Signature Moments</span>
        </div>
      </div>
      <div className="my-36">
        <h2 className="font-Sgs text-xl">Talking to the board</h2>
        <img className="w-full" src={talkboard} alt="talking to the board"/>
      </div>
      <div className="my-36">
        <h2 className="font-Sgs text-xl">User Interviews</h2>
        <img className="w-3/4 my-16 mx-auto" src={useri1} alt="talking to the board"/>
        <img className="w-3/4 my-16 mx-auto" src={useri2} alt="talking to the board"/>
      </div>
      <div className="w-full my-36 flex justify-between">
        <div className="w-[32%] border-2 p-8 rounded-sm shadow-md">
          <h4 className="font-bold text-lg mb-4">Summary</h4>
          <p>The aim of both type of conversations was to understand the perspective of the company as well as the users. Our role is to balance both the points and create an optimum solution. The users can be divided into majorly 2 parts with 2 sub categories. We can talk about that later below.</p>
        </div>
        <div className="w-[64%] flex flex-col justify-between">
          <h4 className="font-bold text-lg my-4">Question Domains</h4>
          <div className="flex justify-between">
            <div className="w-[48%] border-2 p-8 rounded-sm shadow-md">
              <h4 className="font-bold text-lg mb-4">B2C Users</h4>
              <p>Tech Familiarity</p> 
              <p>Attention span</p>
              <p>Experience with VR and physical events</p>
              <p>Conversations in VR</p>
            </div>
            <div className="w-[48%] border-2 p-8 rounded-sm shadow-md">
              <h4 className="font-bold text-lg mb-4">B2B Users</h4>
              <p>Perspective on virtual events</p>
              <p>Shift to VR</p>
              <p>Cost of hosting a physical virtual / VR event</p>
              <p>Brand placements</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-36 justify-evenly items-center">
        <p className="text-xl max-w-[30%]">Okay...Let’s identify and categorise our stakeholders so that we know, whom to design for</p>
        <img className="h-[50vh]" src={thinking} alt="decorative"/>
      </div>
      <div className="flex my-36 mx-auto px-24 justify-between">
        <div className="w-[32%] flex flex-col justify-between items-center">
          <img className="object-fill" src={persona1} alt="persona"/>
          <div className="p-8 w-full border-2 shadow-md rounded-md">
            <h4><b>Bio</b></h4>
            <p><b>Name </b>Adrian</p>
            <p><b>Age </b>42yrs</p>
            <p><b>Marital Status </b>Married</p>
            <p><b>Occupation </b>Floor Manager</p>
          </div>
        </div>
        <div className="w-[64%] flex flex-col justify-between">
          <div className="flex w-full justify-evenly">
            <div className="w-[48%] p-8 border-2 rounded-md shadow-md">
              <h4 className="text-lg font-bold">Pain Points</h4>
              <p>VR is overwhelming.</p>
              <p>Cannot manage to get VR headsets for just a few events.</p>
              <p>VR headsets, after a long use, give me headaches.</p>
              <p>On the face brand placements, pull me out of the experience.</p>
              <p>1 on 1 interactions are hell</p>
            </div>
            <div className="w-[48%] p-8 border-2 rounded-md shadow-md">
              <h4 className="text-lg font-bold">Needs</h4>
              <p>Needs a break between VR sessions</p>
              <p>Need help with getting the VR headset</p>
              <p>Need an incentive to put the effort to learn VR</p>
              <p>Need tutorials to reach the event</p>
            </div>
          </div>
          <div className="w-full p-8 mt-4 border-2 rounded-md shadow-md font-bold text-xl">
            “I don’t want to learn a whole new technology just to attend a conference. VR just gives me headaches. Not worth it.”
          </div>
        </div>
      </div>
      <div className="flex my-36 mx-auto px-24 justify-between">
       <div className="w-[64%] flex flex-col justify-between">
          <div className="flex w-full justify-evenly">
            <div className="w-[48%] p-8 border-2 rounded-md shadow-md">
              <h4 className="text-lg font-bold">Pain Points</h4>
              <p>Sponsors don’t see a benefit in investing in VR promotions.</p>
              <p>There are no ‘aha moments’ to grab user’s attention</p>
              <p>Drop out rate after an hour increases exponentially</p>
              <p>Breaks are not practical as users wont come back</p>
            </div>
            <div className="w-[48%] p-8 border-2 rounded-md shadow-md">
              <h4 className="text-lg font-bold">Needs</h4>
              <p>Provide non-intrusive yet affective ad spaces for sponsors.</p>
              <p>Need some features to hook the audience.</p>
              <p>Increase the retention rate</p>
            </div>
          </div>
          <div className="w-full p-8 mt-4 border-2 rounded-md shadow-md font-bold text-xl">“I want to give users a break, but they wont come back. That’s another reason companies don’t sponsor such events ”</div>
        </div>
        <div className="w-[32%] flex flex-col justify-between items-center">
          <img className="object-fill" src={persona2} alt="persona"/>
          <div className="p-8 w-full border-2 shadow-md rounded-md">
            <h4><b>Bio</b></h4>
            <p><b>Name </b>Kaylen</p>
            <p><b>Age </b>38yrs</p>
            <p><b>Marital Status </b>Married</p>
            <p><b>Occupation </b>Event Manager</p>
          </div>
        </div>
      </div>
 
      <div className="flex my-36 justify-evenly items-center">
        <p className="text-xl max-w-[30%]">We understood what our users want. So, now <b>How might we...</b></p>
        <img className="h-[50vh]" src={how} alt="decorative"/>
      </div>
      <div>
        <h2 className="font-Sgs text-2xl">How Might We?</h2>
        <img className="mx-auto" src={howmightwe} alt="how might we"/>
      </div>
      <div className="flex my-36 justify-evenly items-center">
        <p className="text-xl max-w-[30%]">How are our competitors solving there problems? Or are they? </p>
        <img className="h-[50vh]" src={comp} alt="decorative"/>
      </div>
      <div>
        <h2 className="font-Sgs text-2xl">How Might We?</h2>
        <img className="my-16 mx-auto w-3/4" src={compa} alt="competitor analysis"/>
        <img className="my-24 mx-auto w-3/4" src={collage} alt="collage"/>
      </div>
      <div className="flex my-36 justify-evenly items-center">
        <p className="text-xl max-w-[30%]">After learning from the competitors, we developed some <b>signature moments</b> that users might like</p>
        <img className="h-[50vh]" src={confetti} alt="decorative"/>
      </div>
      <div className="relative px-36 my-24 min-h-[75vh]">
        <h2 className="font-PoS text-xl text-center mb-8">Signature Moments</h2>
        <div className="w-full flex justify-evenly">
          <div className="w-[30%] flex flex-col rounded-md shadow-md p-8 bg-white">
            <h3 className="font-Sgs text-center mb-4">New users to VR</h3>
            <p>VR is new for general users hence the resistance to use is extremely high. We can leverage the intruiging and sci-fi nature of VR to make users try VR.</p>
          </div>
          <div className="w-[30%] flex flex-col rounded-md shadow-md p-8 bg-white">
            <h3 className="font-Sgs text-center mb-4">Overwhelming VR</h3>
            <p>VR get overwhelming if you are not into it for more than a month. We need to have a warm up zone, much more than a tutorial</p>
          </div>
          <div className="w-[30%] flex flex-col rounded-md shadow-md p-8 bg-white">
            <h3 className="font-Sgs text-center mb-4">Superpowers in VR</h3>
            <p>Metaverse is fun only if we can do something there which is not possible in the real life. But what can be done in a conference? </p>
          </div>
        </div>
        <div className="flex justify-between h-[40vh]">
          <img className="relative w-full top-[-5%] h-full -z-10" src={table} alt="decorative" />
          <img className="relative w-full top-[-5%] h-full -z-10" src={signaturemoments} alt="decorative" />
          <img className="relative w-full top-[-5%] h-full -z-10" src={hand} alt="decorative" />
        </div>
      </div>
      <div>
        <h2 className="font-Sgs text-2xl">Storyboard for</h2>
        <h2 className="font-Sgs text-2xl">Signature moments</h2>
        <img className="my-8 mx-auto w-3/4" src={story} alt="storyboard"/>
      </div>
   </div>
  )
}
