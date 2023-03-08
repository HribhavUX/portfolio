import React from 'react'
import "./about.styles.scss"
import { useEffect, useState } from 'react'
import SplitType from 'split-type'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
}
export default function AboutMe() {
  let text;
  const appendLinemask = () => {
    let collection = document.getElementsByClassName("line");
    for (let i = 0; i < collection.length; i++) {
      const element = collection[i];
      const div = document.createElement("div")
      div.classList.add("line-mask")
      element.appendChild(div);

    }
  }
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    text = new SplitType(".text-fill-on-scroll-content", { types: "lines,words" })
    appendLinemask();
    animate();
  }, [])


  const animate = () => {
    let collection = document.getElementsByClassName("line");
    for (let i = 0; i < collection.length; i++) {
      const element = collection[i];
      let triggerElement = element
      let targetElement = element.getElementsByClassName('line-mask')
      let tl = gsap.timeline(
        {
          scrollTrigger: {
            trigger: triggerElement,
            start: "bottom center",
            end: "bottom center  ",
            scrub: 1
          }
        }
      )
      tl.to(targetElement, {
        width: "0%",
        duration: 1
      })
    }
  }


  window.addEventListener("resize", useForceUpdate);
  return (
    <div id="about-me">
      <div className="content text-white font-Ga">
        <p className="text-fill-on-scroll-content content-para"> UX designer with a vision to</p>
        <p className="content-para text-fill-on-scroll-content">design sustainable solutions</p>
        <p className='content-para text-fill-on-scroll-content'>for the future</p>
      </div>
    </div>
  )
}