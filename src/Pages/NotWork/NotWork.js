import hribhav_name from "../../Assets/hribhav_name.png";
import hribhav_funky_photo from "../../Assets/hribhav_funky_photo.png";
import Navbar from "../../Components/Navbar";
import SocialMediaNavbar from "../../Components/SocialMediaNavbar";
import sanityClient from "../../sanity-client";
import {useEffect, useState} from "react";
import Pic from "../../Components/Pic";

export default function NotWork() {
  const [data, setData] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "blog"] {
      images[] {
        asset -> {
          url
        }
      },
      link,
      cards[]
    }`)
      .then(data => {
        console.log(data, ' is data')
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="w-full min-h-screen  bg-[#15151A]">
        <Pic />
      <Navbar name={hribhav_name} width={"w-14"} paddingTop={'3rem'} />
      <SocialMediaNavbar id='unclicked' imageDisplay='block' display='block' image={hribhav_funky_photo}
          style={{
              marginLeft: '0rem',
              display: 'block',
              width: '30.333%',
              cursor: 'pointer',
          }}
      />
      {data && <div className="w-full z-[100] px-36 pl-52 py-24 text-white">
          <div className="w-full min-h-[150vh] flex justify-between">
            <div className="w-[30%] z-[100] flex flex-col justify-between">
              <a href={data[2].link} className=" flex flex-col justify-evenly w-full px-[1.3vw] h-[48%] bg-[#292932] rounded-md">
                  <h1 className='text-3xl font-PoB pb-0'>{data[2].cards[0].heading}</h1>
                  <p className='text-xl font-PoM '>{data[2].cards[0].content}</p>
                  <img src={data[2].images[0].asset.url} className=''/>
              </a>
              <div className="w-full h-[48%] flex flex-col justify-between">
                <a href={data[0].link} className="w-full h-full flex flex-col justify-evenly w-full px-[1.3vw] bg-[#292932] rounded-md">
                    <h1 className='text-3xl font-PoB pb-0'>{data[0].cards[0].heading}</h1>
                    <p className='text-xl font-PoM '>{data[0].cards[0].content}</p>
                    <img src={data[0].images[0].asset.url} alt="" />
                </a>
                {/*<div className="w-full h-[48%] bg-[#292932] rounded-md"></div>*/}
              </div>
            </div>
            <div className="w-[35%] flex flex-col justify-between">
              <div className="w-full h-[100%] flex flex-col justify-between">
                <a href={data[2].link} className="w-full h-[65%] flex flex-col justify-evenly w-full px-[1.3vw] bg-[#292932] rounded-md">
                    <h1 className='text-3xl font-PoB my-0'>{data[1].cards[0].heading}</h1>
                    <p className='text-lg font-PoM my-0'>{data[1].cards[0].content}</p>
                    <img src={data[1].images[0].asset.url} alt="" />
                </a>
                 <a href={data[3].link} className="w-full h-[32%] flex flex-col justify-evenly px-[1vw] bg-[#292932] rounded-md">
                    <h1 className='text-3xl font-PoB my-0'>{data[3].cards[0].heading}</h1>
                    <p className='text-lg font-PoM my-0'>{data[3].cards[0].content}</p>
                </a>
              </div>
              {/*<div className="w-full h-[48%] bg-[#292932] rounded-md"></div>*/}
            </div>
            <div className="w-[30%] flex flex-col justify-between">
              <a href={data[4].link} className="w-full h-[70%] flex flex-col justify-evenly px-[1vw] bg-[#292932] rounded-md">
                  <h1 className='text-3xl font-PoB my-0'>{data[4].cards[0].heading}</h1>
                    <p className='text-base font-PoM my-0'>{data[4].cards[0].content}</p>
                    <img src={data[4].images[0].asset.url} className='w-full' alt="" />
              </a>
              <div className="w-full h-[28%] bg-[#292932] rounded-md"></div>
              {/*<div className="w-full h-[28%] bg-[#292932] rounded-md"></div>*/}
            </div>
          </div>
        </div>}
    </div>
  )
}
